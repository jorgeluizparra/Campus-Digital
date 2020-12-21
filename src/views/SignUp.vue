<template>
  <div class="signup">
    <v-form
      ref="form"
      @submit.prevent="validade()"
    >
      <v-text-field
        v-model="getFormData.data.name"
        :rules="rules.nameRules"
        color="red darken-4"
        label="Nome"
        required />

      <v-text-field
        v-model="getFormData.data.email"
        :rules="rules.emailRules"
        color="red darken-4"
        label="Email"
        required />

      <v-text-field
        v-model="getFormData.data.studentNumber"
        :rules="rules.studentNumberRules"
        color="red darken-4"
        label="Registro Acadêmico"
        required 
        :disabled="getFormData.data.id ? true : false"
        />
      
      <v-text-field
        v-model="getFormData.data.cpf"
        :rules="rules.cpfRules"
        color="red darken-4"
        label="CPF (Somente numeros)"
        required 
        :disabled="getFormData.data.id ? true : false"
        />

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

export default {
  data() {
    return { 
      message: {},
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
    ...mapGetters(['getFormData'])
  },
  methods: {
    ...mapActions(['createRegister', 'updateRegister', 'clearFormData']),
    validade () {
      if (this.$refs.form.validate()) {
        if (this.getFormData.data.id) {
          this.updateRegister (this.getFormData)
        } else {
          this.createRegister (this.getFormData.data)
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
