<template>
    <div>
        <vue-anka-cropper :showPreview="false" @cropper-saved="updateImg" />
        <div v-if="imgURI" class="text-center pt-4">
            <img :src="imgURI" alt="" />
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            imgURI: null,
        }
    },
    methods: {
        updateImg(payload) {
            this.$emit('input', payload.croppedFile)
            this.imgURI = payload.croppedImageURI
        }
    },
    props: ['value']
}
</script>