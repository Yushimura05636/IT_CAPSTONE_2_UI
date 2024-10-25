<template>
    <div class="bg-white">
      <header class="py-8 px-4 md:px-16" v-intersect>
        <div class="container mx-auto flex justify-between items-center animate-fadeInDown">
          <div class="flex items-center gap-2">
            <img src="../img/LendCash_Logo-removebg-preview.png" class="w-20" alt="logo">
            <p class="text-lg text-green-600">LendCash</p>
          </div>
          <nav class="hidden md:flex gap-10">
            <a href="features" class="text-gray-600 hover:text-green-600 font-bold">Features</a>
            <a href="about" class="text-gray-600 hover:text-green-600 font-bold">About</a>
            <a href="blog" class="text-gray-600 hover:text-green-600 font-bold">Blog</a>
            <a href="contact" class="text-gray-600 hover:text-green-600 font-bold">Contact</a>
          </nav>
          <div class="flex items-center gap-4">
            <a href="login" class="bg-green-600 text-white px-6 py-2 rounded-md transition-transform transform hover:scale-105">Log in</a>
          </div>
        </div>
      </header>

      <main class="py-16 px-4 md:px-16">
        <section v-intersect class="container mx-auto flex flex-col md:flex-row gap-16">
          <div class="md:w-1/2 animate-slideInLeft">
            <h2 class="text-5xl font-bold text-green-500 mb-4">LendCash Microfinance System for ERD Financial Solution</h2>
            <p class="text-lg text-gray-600 mb-8">An Online Microfinance Lending System designed to empower individuals and small businesses.</p>
            <a href="register_step1" class="bg-green-600 text-white px-6 py-3 rounded-md transition-transform transform hover:scale-105">Apply Now!</a>
          </div>
          <div class="md:w-1/2 flex justify-center items-center animate-zoomIn">
            <img src="../img/handsakebg_1sect.jpg" alt="LendCash" class="w-full h-auto rounded-lg shadow-lg">
          </div>
        </section>

        <!-- LendCash Offers Section -->
        <section v-intersect class="relative bg-cover bg-no-repeat mt-20" style="background-image: url('../img/rainingmoney.png');">
          <div class="container mx-auto text-center animate-fadeInUp">
            <h3 class="text-6xl font-bold text-green-500 mb-4">LendCash Offers</h3>
            <p class="text-lg text-gray-600 mb-8">Creating Opportunities, One Microloan at a Time!</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
              <!-- Each feature item -->
              <div v-intersect class="bg-white rounded-md p-6 shadow-lg transition-transform transform hover:scale-105 animate-fadeInUp delay-100">
                <img src="../img/grouping.png" alt="Group Lending" class="w-16 h-16 mb-4">
                <h4 class="text-xl font-bold text-gray-800 mb-2">Group Lending</h4>
                <p class="text-gray-600">Offers small groups of individuals the opportunity to come together to access financial services.</p>
              </div>
              <!-- Repeat similar structure for other features -->
            </div>
          </div>
        </section>
      </main>
    </div>
  </template>

<script setup lang="ts">
import { onMounted } from 'vue';

// Define the intersection observer directive
function useIntersectDirective() {
  const intersectDirective = {
    beforeMount(el: HTMLElement, binding: any) {
      const options = {
        root: null,
        threshold: 0.1,
      };
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(binding.value || "animate-fadeInUp");
          observer.unobserve(el);
        }
      }, options);
      observer.observe(el);
    },
  };

  return { intersectDirective };
}

// Register the directive
const { intersectDirective } = useIntersectDirective();
</script>

  <style scoped>
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes zoomIn {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .animate-fadeInUp {
    animation: fadeInUp 0.8s ease-out forwards;
  }
  .animate-fadeInDown {
    animation: fadeInDown 0.8s ease-out forwards;
  }
  .animate-zoomIn {
    animation: zoomIn 0.8s ease-out forwards;
  }
  .animate-slideInLeft {
    animation: slideInLeft 0.8s ease-out forwards;
  }

  .transition-transform {
    transition: transform 0.3s ease;
  }
  </style>
