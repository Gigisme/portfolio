import {createI18n} from 'vue-i18n'
import en from './en.json'
import lt from './lt.json'

const messages = {
    en,
    lt
}

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages,
    legacy: false
})

export default i18n
