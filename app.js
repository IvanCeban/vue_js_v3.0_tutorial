const App = { // объект содержит настройки будущего Vue приложения
  data () { // метод который нужен для передачи данных из js в html
    return {
      title: 'Notes list',
      placeholderName: 'Enter note name',
      inputValue: '',
      notes: ['note 1', 'note 2']
    }
  },

  methods: {
    inputChangeHandler (event) {
      this.inputValue = event.target.value
    }
  }
}

Vue.createApp(App).mount('#app')
// метод createApp создает Vue приложение с настройками из переменной App
// а затем монтирует это приложение в html в тег с id="app".
// То есть Vue будет доступен только внутри этого тега

