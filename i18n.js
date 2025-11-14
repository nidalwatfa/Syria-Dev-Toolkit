// i18n.js
import i18next from 'i18next';

// ترجمة النصوص للغات الثلاث
const resources = {
  ar: {
    translation: {
      app_name: "Toolkit",
      welcome_message: "مرحباً بك!",
      login: "تسجيل الدخول",
      logout: "تسجيل الخروج",
      settings: "الإعدادات",
      language: "اللغة",
      save: "حفظ",
      cancel: "إلغاء",
      exit: "خروج"
    }
  },
  en: {
    translation: {
      app_name: "Toolkit",
      welcome_message: "Welcome!",
      login: "Login",
      logout: "Logout",
      settings: "Settings",
      language: "Language",
      save: "Save",
      cancel: "Cancel",
      exit: "Exit"
    }
  },
  ku: {
    translation: {
      app_name: "Toolkit",
      welcome_message: "Slav û bi xêr hatî!",
      login: "Têkeve",
      logout: "Derkeve",
      settings: "Mîheng",
      language: "Ziman",
      save: "Tomar bike",
      cancel: "Betal bike",
      exit: "Derkeve"
    }
  }
};

// تهيئة i18next
i18next.init({
  lng: 'en', // اللغة الافتراضية (يمكنك تغييرها إلى 'ar' أو 'ku')
  resources
});

// مثال استخدام
console.log(i18next.t('welcome_message')); 
// يطبع حسب اللغة المختارة: "Welcome!" أو "مرحباً بك!" أو "Slav û bi xêr hatî!"
