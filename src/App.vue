
<template>
    <div id="app">
      <form> 
        <div>
          <input @change="uploadImage" type="file" name="photo" accept="image/*">
        </div>
        <div>
          <button type="button" name="button" id="save" @click="save">Save</button>
        </div>
      </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      imageSrc: "",
      files: []
    }
  },

  methods: {
    save: function(e) {
      var data = new FormData();
      data.append('photo', this.files[0])
      var reader = new FileReader();
      reader.readAsDataURL(this.files[0]);
      reader.onload = (e) => {
        this.imageSrc = e.target.result;
      };

      console.log("Before post ...");
      axios.post('http://localhost:3000/uploads', data, {headers: { 'Content-Type': 'multipart/form-data' } }).then(function (response) {
        console.log("Response from server ", res.body);
      }).catch(function (error) {
        console.log(error);
      });
    },

    uploadImage: function(e) {
      console.log("Upload")
      this.files = e.target.files;
    }
  }
}
</script>