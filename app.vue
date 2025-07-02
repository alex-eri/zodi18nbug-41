<template>
<UApp :locale="locales[locale]">
      {{ $t('hello') }}
        <ULocaleSelect
          v-model="locale"
          :locales="availableLocales.map((l) => locales[l])"
          class="w-36"
        />
        {{ locale }}

  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormField label="Email" name="email">
      <UInput v-model="state.email" />
    </UFormField>

    <UFormField label="Password" name="password">
      <UInput v-model="state.password" type="password" />
    </UFormField>

    <UButton type="submit">
      Submit
    </UButton>
  </UForm>


</UApp>
</template>

<script setup lang="ts">
import * as z from 'zod'
import * as locales from '@nuxt/ui/locale'

const { locale, availableLocales, t } = useI18n()


const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
  email: undefined,
  password: undefined
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
  console.log(event.data)
}






</script>