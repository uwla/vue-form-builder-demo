<template>
    <div id="app">
        <h1 class="text-center">VUE FORM BUILDER</h1>

        <p class="text-justify">You can play with the following buttons to:</p>
        <ol>
            <li>simulate error response from the server</li>
            <li>simulate success messages when a field is valid</li>
            <li>fill out the form with values from a model</li>
        </ol>

        <div class="mb-5">
            <b-button-group>
                <b-button variant="danger" @click="setErrors">set errors</b-button>
                <b-button variant="primary" @click="clearErrors">clear errors</b-button>
                <b-button variant="success" @click="setMsg">set msg</b-button>
                <b-button variant="primary" @click="clearMsg">clear msg</b-button>
                <b-button variant="warning" @click="setModel">set model</b-button>
                <b-button variant="primary" @click="clearModel">clear model</b-button>
            </b-button-group>
        </div>

        <h2>EXAMPLE 1</h2>
        <p>Form using VueFormBuilder components:</p>
        <vfb v-bind="params" :fields="fields1" @submit="sendRequest" />
        <h2>EXAMPLE 2</h2>
        <p>Form using custom components:</p>
        <vfb v-bind="params" :fields="fields2" @submit="sendRequest" />
        <h2>EXAMPLE 3</h2>
        <p>Form using BootstrapVue components:</p>
        <vfb v-bind="params" :fields="fields3" useBootstrap @submit="sendRequest" />
    </div>
</template>
<script>
import { model, errors, messages, validation } from './static'

export default {
    name: 'App',
    computed: {
        params() {
            return {
                errors: this.errors,
                messages: this.messages,
                model: this.model,
                validateOnInput: true,
                validation: this.validation,
            }
        }
    },
    data() {
        return {
            fields1: [
                'name:name|text|min=5|max=30',
                'name:email|email',
                'name:phone|tel|label:Phone number',
                'name:website|url|label:Personal website',
                'name:password|password|label:Choose your password',
                'name:birthday|date',
                'name:bio|textarea|label:Personal bio|rows=6',
                'name:gender|options:male,female',
                'name:photo|label:Profile picture|file',
                'name:fruits|stacked|checkboxes|options:apple,banana,orange,avocado',
                'name:country|stacked|options:United States,Mexico,Canada,Other',
                'name:agree|label:Agree to the terms and conditions|checkbox',
                'name:token|hidden|label:none|text',
                'component:vfb-buttons|label:none|class=block|submitText=SUBMIT|resetText=RESET',
            ],
            fields2: [
                {
                    name: 'language',
                    label: 'Choose a language using Multiselect (3rd party plugin)',
                    component: 'multiselect',
                    props: {
                        options: ['bash', 'c', 'c++', 'java', 'javascript', 'go', 'php', 'perl', 'python'],
                        multiple: true,
                        'close-on-select': false,
                    }
                },
                'name:img|label:Upload image using Vue anka Cropper (3rd party plugin)|component:img-cropper',
                'component:vfb-buttons|class=right|label:none',
            ],
            fields3: [
                'name:schedule|timepicker',
                'name:photo|label:Profile picture|multiple|file',
                'name:amount|range|min=5|max=25',
                'name:fruits|checkboxes|options:apple,banana,orange,avocado',
                'name:tags|tags|tag-variant=primary',
                'name:agree|checkbox|label:Agree to terms and conditions',
                'component:vfb-buttons|label:none',
            ],
            errors: {},
            model: {},
            messages: messages,
            validation: validation,
        }
    },

    methods: {
        sendRequest(data) {
            console.log(data)
        },
        setErrors() {
            this.errors = {... errors}
        },
        clearErrors() {
            this.errors = {}
        },
        setModel() {
            this.model = {... model}
        },
        clearModel() {
            this.model = {
                name: '',
                email: '',
                gender: '',
                phone: '',
                fruits: [],
                website: '',
                country: '',
                agree: false,
                bio: ''
            }
        },
        setMsg() {
            this.messages = {... messages}
        },
        clearMsg() {
            this.messages = {}
        }
    },
}
</script>

<style src="bootstrap/dist/css/bootstrap.min.css"></style>
<style src="bootstrap-vue/dist/bootstrap-vue.min.css"></style>
<style src="vue-anka-cropper/dist/VueAnkaCropper.css"></style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style src="@uwlajs/vue-form-builder/dist/VueFormBuilder.css"></style>
<style>
h1 {
    text-align: center;
    margin-bottom: 1.5em;
}

#app {
    padding: 32px;
    margin: 0 auto;
    max-width: 650px;
}

#app form {
    margin-top: 2em;
    margin-bottom: 2em;
    border: 1px solid #bbb;
    border-radius: .5em;
    padding: 1em;
}

#app form > :last-child {
    margin-bottom: 0;
}

.ankaCropper a {
    box-sizing: content-box;
}

.ankaCropper svg {
    vertical-align: unset;
}

.ankaCropper__saveButton {
    display: flex !important;
    align-items: center;
}
</style>