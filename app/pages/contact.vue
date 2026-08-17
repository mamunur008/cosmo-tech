<script setup lang="ts">
useSeoMeta({ title: 'Contact' })

const submitted = ref(false)
const submitting = ref(false)
const submitError = ref('')

const submit = async (event: Event) => {
  const form = event.currentTarget as HTMLFormElement
  submitted.value = false
  submitError.value = ''
  submitting.value = true

  try {
    const formData = new FormData(form)
    const body = new URLSearchParams()
    formData.forEach((value, key) => body.append(key, String(value)))
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    })
    if (!response.ok) throw new Error('Submission failed')
    form.reset()
    submitted.value = true
  }
  catch {
    submitError.value = 'We could not send your enquiry. Please try again or contact us directly.'
  }
  finally {
    submitting.value = false
  }
}
</script>

<template>
  <div>
    <PageHero eyebrow="Contact" title="Let’s build something valuable." description="Tell us what you want to improve, create or deliver. Our team will review the requirement and arrange an initial discussion." />
    <section class="py-24">
      <AppContainer>
        <div class="grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <p class="eyebrow">Start a conversation</p>
            <h2 class="mt-5 text-3xl font-black text-[#071b33]">What can we help you deliver?</h2>
            <div class="mt-8 grid gap-3">
              <div v-for="item in ['IT and software solutions', 'Interior design and implementation', 'Business or technology consultancy', 'Contracting and turnkey delivery', 'Partnership or institutional enquiry']" :key="item" class="rounded-2xl bg-[#f4f1e9] px-5 py-4 text-sm font-semibold text-[#071b33]">{{ item }}</div>
            </div>
            <p class="mt-8 text-sm leading-7 text-slate-500">Official address, telephone and business email will be added after confirmation of the renewed trade licence.</p>
          </div>

          <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" class="grid gap-5 rounded-[2rem] border border-slate-200 bg-white p-7 sm:grid-cols-2 sm:p-10" @submit.prevent="submit">
            <input type="hidden" name="form-name" value="contact">
            <p class="absolute h-px w-px overflow-hidden [clip:rect(0,0,0,0)]"><label>Do not fill this out: <input name="bot-field"></label></p>
            <label class="field">Name<input required name="name"></label>
            <label class="field">Organization<input name="organization"></label>
            <label class="field">Email<input required type="email" name="email"></label>
            <label class="field">Phone<input name="phone"></label>
            <label class="field sm:col-span-2">Service required<select name="service" required><option value="" disabled selected>Choose a service</option><option>IT and software solutions</option><option>Interior design and implementation</option><option>Consultancy</option><option>Contracting and turnkey delivery</option></select></label>
            <label class="field sm:col-span-2">Project details<textarea required name="message" rows="6" /></label>
            <button type="submit" :disabled="submitting" class="rounded-full bg-[#071b33] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#12345a] disabled:cursor-wait disabled:opacity-60 sm:col-span-2">{{ submitting ? 'Sending…' : 'Send enquiry' }}</button>
            <p v-if="submitted" role="status" class="rounded-xl bg-emerald-50 p-4 text-sm text-emerald-900 sm:col-span-2">Thank you. Your enquiry has been sent successfully. Our team will contact you shortly.</p>
            <p v-if="submitError" role="alert" class="rounded-xl bg-red-50 p-4 text-sm text-red-800 sm:col-span-2">{{ submitError }}</p>
            <p class="text-xs text-slate-500 sm:col-span-2">Your information is used only to respond to this enquiry.</p>
          </form>
        </div>
      </AppContainer>
    </section>
  </div>
</template>
