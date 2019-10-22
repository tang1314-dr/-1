import Vue from 'vue'

const getTime = Vue.filter('getTime', function (value) {
    return new Date(Number(value)).toLocaleDateString() 
})

export default {
    getTime
}