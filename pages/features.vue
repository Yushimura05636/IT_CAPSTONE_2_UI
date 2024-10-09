

<template>
  <section class="py-14">
    <div class="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
      <div class="max-w-xl space-y-3">
        <h3 class="text-gray-800 text-3xl font-semibold sm:text-4xl">
          Key Features of LendCash Microfinance
        </h3>
        <p>
          Microfinance is a financial service aimed at providing small loans and financial support to individuals and small businesses that typically lack access to traditional banking services. It empowers underserved populations, particularly in developing countries, to start or expand their small enterprises, improve their living standards, and achieve financial independence.
        </p>
      </div>
      <div class="mt-12">
        <ul class="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
          <li v-for="item in features" :key="item.title" class="flex gap-x-4">
            <div class="flex-none w-12 h-12 bg-indigo-600 text-white rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6" v-html="item.icon"></svg>
            </div>
            <div class="space-y-3">
              <h4 class="text-lg text-gray-800 font-semibold">
                {{ item.title }}
              </h4>
              <p>
                {{ item.desc }}
              </p>
              
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeatureSection',
  data() {
    return {
      features: [
          {
            icon:
                `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>`,
            title: "Small Loans",
            desc: "LendCash offer microloans, often ranging from a few hundred to a few thousand peso, allowing borrowers to fund small-scale businesses or personal projects.",
            href: "javascript:void(0)"
        },
        {
            icon:
                `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>`,
            title: "Financial Inclusion",
            desc: "By targeting low-income individuals, microfinance plays a crucial role in promoting financial inclusion and bridging the gap for those who are unbanked or underbanked.",
            href: "javascript:void(0)"
        },
        {
            icon:
                `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>`,
            title: "Group Lending",
            desc: "LendCash utilize group lending models, where borrowers form small groups that collectively guarantee loans. This approach fosters community support and reduces default risks.",
            href: "javascript:void(0)"
        },
        
        {
            icon:
                `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>`,
            title: "Social Impact",
            desc: "Microfinance has been shown to improve the economic stability of families, enhance education opportunities, and promote gender equality by empowering women entrepreneurs.",
            href: "javascript:void(0)"
        },
      ]
    }
  }
}
</script>