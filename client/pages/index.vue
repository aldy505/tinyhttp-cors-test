<template>
  <div class="container">
      <div class="grid">
            <button @click="callGet">GET Request</button>
            <button @click="callPost">POST Request</button>
            <button @click="callOptions">OPTIONS Request</button>
            <button @click="data = []">Clear</button>
      </div>
      <div class="code">
          <div v-for="item in data" class="spacing" :key="item.date">
              {{item}}
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            data: []
        }
    },
    methods: {
        async callGet() {
            try {
                const res = await axios.get('http://localhost:3100')
                this.data.push(res.data)
            } catch (error) {
                console.error(error)
            }
        },
        async callPost() {
            try {
                const res = await axios.post('http://localhost:3100')
                this.data.push(res.data)
            } catch (error) {
                console.error(error)
            }
        },
        async callOptions() {
            try {
                const res = await axios.options('http://localhost:3100')
                this.data.push(res.data)
            } catch (error) {
                console.error(error)
            }
        }
    }
}
</script>

<style>
.container {
    padding-left: 3rem;
    padding-right: 3rem;
    width: 100%;
    max-width: 1280px;
    font-family: Arial, Helvetica, sans-serif;
}
.code {
    margin-top: 2rem;
    padding: 0.5rem;
    white-space: normal;
    background-color: #f1e8cd;
}
.grid {
    display: grid;
    gap: 1rem;
    grid-auto-flow: column;
}
button {
    width: 100%;
    height: 2rem;
}
.spacing {
    padding-top: 1rem;
    padding-bottom: 1rem;
}
</style>