<template>
  <div>
      <form>
          <!-- add name, location, when the 
          result from registering comes back, 
          send the collection(user details) -->

      <p><input type="email" v-model='email'/></p>
      <p><input type='password' v-model="password" /></p>
      <button >Register<button>
      <form>
  </div>
</template>

<script>
import * as Firebase from '../../config/firebase'
export default {
    data(){
        return {
        email:"",
        password:""
        }
        },
    methods:{
        signup_user(){
            Firebase.auth.createUserWithEmailAndPassword(
                this.email,this.password
            ).then((result)=>{
                    this.$emit("user_created",result)
                })
            }
        },

    computed:{


    }
}
</script>

<style>

</style>