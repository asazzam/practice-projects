const testimonials = [
  {
    name: "Chad Johnson",
    photoUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "I am incredibly impressed with the wide range of products offered by This Brand. From clothing to accessories, they truly have all of the things you need. The quality is exceptional, and the customer service top-notch.",
  },
  {
    name: "Leonard Smith",
    photoUrl:
      "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "This Brand offers a wide variety of products that cater to all of my needs. Their exceptional quality and customer service make them my go-to choice every time I shop. I highly recommend This Brand for anyone looking for top-notch items at affordable prices.",
  },
  {
    name: "Robert Jensen",
    photoUrl:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "I have been blown away by the quality and variety of products offered by This Brand.",
  },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

function updateTestimonial() {
  const { name, photoUrl, text } = testimonials[idx];
  imgEl.src = photoUrl;
  textEl.innerText = text;
  usernameEl.innerText = name;
  idx++;

  if (idx === testimonials.length) {
    idx = 0;
  }
  setTimeout(() => {
    updateTestimonial();
  }, 2000);
}
