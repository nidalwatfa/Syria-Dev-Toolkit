# 🇸🇾 Syria Dev Toolkit
#🖥️المطور-NIDAL WATFA
> ⚠️ ملاحظة هامة: جميع مشاريعي على GitHub يتم تنفيذها بالكامل من خلال هاتفي المحمول باستخدام تطبيق Termux، وذلك بسبب عدم امتلاكي حاسوب شخصي. رغم هذا التحدي، أواصل التعلم والبناء خطوة بخطوة، وأعتبر هذا المشروع دليلًا على أن الشغف والإصرار أقوى من أي عائق مادي.

أداة تطوير سورية مفتوحة المصدر تهدف إلى تمكين المطورين من بناء تطبيقات عربية وكردية ودولية بسهولة، مع التركيز على البساطة، التجريب، والتعلم الذاتي.

---

## 🌍 دعم اللغات

يدعم المشروع حاليًا أربع لغات رئيسية:

- العربية 🇸🇾  
- الكردية 🏔️  
- الإنجليزية 🇬🇧  
- الفرنسية 🇫🇷  

### الميزات المتاحة:
- **عد الكلمات** لجميع اللغات.  
- **إزالة التشكيل** (للعربية فقط).  

---

## 🚀 البداية السريعة (تشغيل على Termux)

### المتطلبات:
- تطبيق [Termux](https://play.google.com/store/apps/details?id=com.termux)  
- Python مثبت داخل Termux  

### خطوات التشغيل:

```bash
# تثبيت Python (إذا لم يكن مثبتًا)
pkg install python

# تثبيت Git (لرفع المشروع إلى GitHub)
pkg install git

# إنشاء مجلد المشروع
mkdir -p ~/Syria-Dev-Toolkit/backend
cd ~/Syria-Dev-Toolkit/backend

# إنشاء ملف main.py
nano main.py
```

ثم الصق الكود التالي داخل nano:

```python
from flask import Flask, request, render_template_string
import re

app = Flask(__name__)

HTML_FORM = """
<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <title>معالجة النصوص متعددة اللغات</title>
</head>
<body style="direction: rtl; font-family: sans-serif;">
    <h2>أدخل نصًا:</h2>
    <form method="post">
        <label>اختر اللغة:</label>
        <select name="lang">
            <option value="arabic">العربية</option>
            <option value="kurdish">الكردية</option>
            <option value="english">الإنجليزية</option>
            <option value="french">الفرنسية</option>
        </select><br><br>
        <textarea name="text" rows="6" cols="40"></textarea><br><br>
        <input type="submit" name="action" value="عد الكلمات">
        <input type="submit" name="action" value="إزالة التشكيل (للعربية فقط)">
    </form>
    {% if result is not none %}
        <h3>النتيجة:</h3>
        <p>{{ result }}</p>
    {% endif %}
</body>
</html>
"""

def remove_tashkeel(text):
    return re.sub(r'[\u064B-\u0652]', '', text)

@app.route("/", methods=["GET", "POST"])
def home():
    result = None
    if request.method == "POST":
        text = request.form.get("text", "")
        action = request.form.get("action")
        lang = request.form.get("lang")

        if action == "عد الكلمات":
            words = text.strip().split()
            result = f"عدد الكلمات ({lang}): {len(words)}"
        elif action == "إزالة التشكيل (للعربية فقط)" and lang == "arabic":
            result = remove_tashkeel(text)
        else:
            result = "هذه الميزة غير متاحة لهذه اللغة."
    return render_template_string(HTML_FORM, result=result)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
```

---

### ملف المتطلبات
```bash
echo flask > requirements.txt
```

### تثبيت Flask وتشغيل التطبيق
```bash
pip install -r requirements.txt
python main.py
```

ثم افتح المتصفح على:
```
http://127.0.0.1:5000
```

---

## 🎯 الهدف من المشروع
- دعم المطورين العرب والكرد وغيرهم من خلال أدوات بسيطة لمعالجة النصوص.  
- توفير واجهة متعددة اللغات (عربية، كردية، إنجليزية، فرنسية).  
- بناء أساس يمكن توسيعه لاحقًا ليشمل لغات إضافية.  
- إثبات أن البرمجة ممكنة حتى من الهاتف المحمول فقط.  

---

## 📦 هيكل المشروع

```
Syria-Dev-Toolkit/
└── backend/
    ├── main.py
    └── requirements.txt
```

---

## 🤝 المساهمة
نرحب بأي مساهمة أو اقتراح! فقط افتح "Issue" أو أرسل "Pull Request".

---

## 📜 الرخصة
MIT License – حرية كاملة في الاستخدام والتعديل.
