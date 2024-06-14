<template>
  <div class="container-typed">
    <h1>
      <span class="bg-white p-5 rounded text-black font-bold">Criamos<span class="font-brand-highlight">
          soluções</span></span>
      <br>
      <span class="typed-text bg-white p-3 rounded text-black font-bold">{{ typeValue }}<span
          class="blinking-cursor font-brand-highlight">
          |</span></span>
      <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'TypeWiriter',
  props: {},
  data: () => {
    return {
      typeValue: '',
      typeStatus: false,
      displayTextArray: ['concisas.', 'que geram valor.', 'escaláveis.'],
      typingSpeed: 35,
      erasingSpeed: 50,
      newTextDelay: 2000,
      displayTextArrayIndex: 0,
      charIndex: 0
    }
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200)
  },
  methods: {
    typeText() {
      if (this.charIndex < this.displayTextArray[this.displayTextArrayIndex].length) {
        if (!this.typeStatus) { this.typeStatus = true }
        this.typeValue += this.displayTextArray[this.displayTextArrayIndex].charAt(
          this.charIndex
        )
        this.charIndex += 1
        setTimeout(this.typeText, this.typingSpeed)
      } else {
        this.typeStatus = false
        setTimeout(this.eraseText, this.newTextDelay)
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) { this.typeStatus = true }
        this.typeValue = this.displayTextArray[this.displayTextArrayIndex].substring(
          0,
          this.charIndex - 1
        )
        this.charIndex -= 1
        setTimeout(this.eraseText, this.erasingSpeed)
      } else {
        this.typeStatus = false
        this.displayTextArrayIndex += 1
        if (this.displayTextArrayIndex >= this.displayTextArray.length) { this.displayTextArrayIndex = 0 }
        setTimeout(this.typeText, this.typingSpeed + 1000)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.container-typed {
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
}

h1 {
  font-size: 4rem;
  font-weight: bold;

  span.typed-text {
    color: black
  }
}

// Cursor blinking CSS Starts...
.blinking-cursor {
  font-size: 4rem;
  color: #000000;
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}

@media (max-width: 900px) {
  h1 {
    font-size: 2.5rem;
    text-align: center;
  }

  .blinking-cursor {
    font-size: 2.5rem;
  }
}

@media (max-width: 390px) {
  h1 {
    font-size: 2rem;
  }

  .blinking-cursor {
    font-size: 2rem;
  }
}

@keyframes blink {

  from,
  to {
    color: transparent;
  }

  50% {
    color: #000000;
  }
}

@-moz-keyframes blink {

  from,
  to {
    color: transparent;
  }

  50% {
    color: #000000;
  }
}

@-webkit-keyframes blink {

  from,
  to {
    color: transparent;
  }

  50% {
    color: #000000;
  }
}

@-ms-keyframes blink {

  from,
  to {
    color: transparent;
  }

  50% {
    color: #000000;
  }
}

@-o-keyframes blink {

  from,
  to {
    color: transparent;
  }

  50% {
    color: #000000;
  }
}
</style>
