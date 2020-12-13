<template>
  <div class="signup">
    <v-form
      ref="form"
      @submit.prevent="validade()"
    >
      <v-text-field
        v-model="payload.name"
        :rules="rules.nameRules"
        color="red darken-4"
        label="Nome"
        required />

      <v-text-field
        v-model="payload.email"
        :rules="rules.emailRules"
        color="red darken-4"
        label="Email"
        required />

      <v-text-field
        v-model="payload.studentNumber"
        :rules="rules.studentNumberRules"
        color="red darken-4"
        label="Registro Acadêmico"
        required />
      
      <v-text-field
        v-model="payload.cpf"
        :rules="rules.cpfRules"
        color="red darken-4"
        label="CPF (Somente numeros)"
        required />

      <br>

      <message-card :message="message" />

      <br>

      <v-btn
        dark
        color="black"
        class="mr-4"
        type="submit"
      >
        Salvar
      </v-btn>

      <v-btn
        dark
        color="red darken-4"
        class="mr-4"
        @click="cancel()"
      >
        Cancelar
      </v-btn>

  </v-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Message from '../components/message.vue'

export default {
  components: {
    'message-card' : Message
  },
  data() {
    return { 
      message: {
        type:  '',
        message: ''
      },
      rules: {
        nameRules: [
          v => !!v || 'Nome é obrigatório.'
        ],
        emailRules: [
          v => !!v || 'Email é obrigatório.',
          v => /.+@.+\..+/.test(v) || 'Insira um email válido.',
        ],
        studentNumberRules: [
          v => !!v || 'Registro acadêmico é obrigatório.',
          v => (v && v.length === 6) || 'Registro acadêmico deve conter 6 numeros.'
        ],
        cpfRules: [
          v => !!v || 'CPF é obrigatório.',
          v => (v && v.length === 11) || 'Insira um CPF válido.'
        ]
      }
    }
  },
  computed: {
    ...mapGetters(['payload'])
  },
  methods: {
    ...mapActions(['submit', 'clearFormData']),
    validade () {
      if (this.$refs.form.validate()) {
        this.submit ()
        .then ( () => {
          this.message = {
            type: 'success',
            message: 'Cadastro realizado com sucesso!'
          }
        })
      }
      else {
        this.message = {
          type: 'error',
          message: 'Erro ao submeter os dados.'
        }
      }
    },
    cancel () {
      this.clearFormData()
      this.$router.push('/')
    }
  },
}
</script>
