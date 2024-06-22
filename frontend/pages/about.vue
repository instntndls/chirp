<script setup lang="ts">
import {ArrowRightIcon} from 'lucide-vue-next'
</script>

<template>
 <div class="p-12 flex flex-col gap-2">
   <h1 class="text-5xl font-bold">About Chirp 🐥</h1>
   <p class="ml-2">Welcome to Chirp, your go-to platform for sending anonymous messages effortlessly. At Chirp, we believe in the power of words and the freedom to express oneself without the constraints of identity. Whether you want to share a secret, give feedback, or surprise someone with a kind message, Chirp makes it easy and secure.</p>

   <h2 class="text-3xl font-bold">Our Mission 🎯</h2>
   <p class="ml-2">Our mission is to create a space where people can communicate freely and openly. We aim to foster honest and candid interactions by ensuring complete anonymity and a user-friendly experience.</p>

   <h2 class="text-3xl font-bold">Why Chirp? 🤔</h2>
   <ul class="ml-2">
     <li><strong>Complete Anonymity:</strong> We prioritize your privacy. Your identity remains confidential, ensuring that your messages are truly anonymous.</li>
     <li><strong>Easy to Use:</strong> Our platform is designed with simplicity in mind. You can start sending messages with just a few clicks.</li>
     <li><strong>Instant Delivery:</strong> Messages are delivered in real-time, making sure your thoughts are conveyed promptly.</li>
     <li><strong>Free to Use:</strong> Enjoy all our features at no cost. We believe in providing a valuable service to everyone.</li>
   </ul>

   <h2 class="text-3xl font-bold">How It Works 👨‍💻</h2>
   <p class="ml-2">Using Chirp is simple:</p>
   <ol class="ml-4">
     <li><strong>Type Your Message:</strong> Enter the message you want to send anonymously.</li>
     <li><strong>Specify the Recipient:</strong> Provide the recipient's details.</li>
     <li><strong>Hit Send:</strong> Your message is delivered instantly and anonymously.</li>
   </ol>

   <h2 class="text-3xl font-bold">Join the Chirp Community 👥</h2>

   <p>Join thousands of users who trust Chirp for their anonymous messaging needs. Whether you're sending a compliment, giving constructive feedback, or just sharing a thought, Chirp is here to help you communicate without boundaries.</p>

   <p>Feel free to <a href="contact.html">contact us</a> with any questions or feedback.</p>
<h2 class="text-3xl font-bold">Why Chirp? 🤔</h2>
   <ul class="ml-2">
     <li><strong>Complete Anonymity:</strong> We prioritize your privacy. Your identity remains confidential, ensuring that your messages are truly anonymous.</li>
     <li><strong>Easy to Use:</strong> Our platform is designed with simplicity in mind. You can start sending messages with just a few clicks.</li>
     <li><strong>Instant Delivery:</strong> Messages are delivered in real-time, making sure your thoughts are conveyed promptly.</li>
     <li><strong>Free to Use:</strong> Enjoy all our features at no cost. We believe in providing a valuable service to everyone.</li>
   </ul>

   <h2 class="text-3xl font-bold">How It Works 👨‍💻</h2>
   <p class="ml-2">Using Chirp is simple:</p>
   <ol class="ml-4">
     <li><strong>Type Your Message:</strong> Enter the message you want to send anonymously.</li>
     <li><strong>Specify the Recipient:</strong> Provide the recipient's details.</li>
     <li><strong>Hit Send:</strong> Your message is delivered instantly and anonymously.</li>
   </ol>

   <h2 class="text-3xl font-bold">Join the Chirp Community 👥</h2>

   <p>Join thousands of users who trust Chirp for their anonymous messaging needs. Whether you're sending a compliment, giving constructive feedback, or just sharing a thought, Chirp is here to help you communicate without boundaries.</p>

   <p>Feel free to <a href="contact.html">contact us</a> with any questions or feedback.</p>

   <router-link to="/">
     <p class="text-primary font-bold text-5xl text-center flex items-center justify-center cursor-pointer">
       Start Chirping
       <ArrowRightIcon class="ml-2 size-12"/>
     </p>
     <p class="text-center text-5xl">
       🐣
     </p>
   </router-link>

 </div>
</template>

<style scoped>

</style>