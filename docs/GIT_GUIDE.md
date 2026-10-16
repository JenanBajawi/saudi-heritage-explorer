# دليل Git للمبتدئات

هذا الدليل يشرح لك خطوة بخطوة كيف تنزلين المشروع، تشتغلين عليه، وترفعين شغلك.

## مرة وحدة فقط: التجهيز

1. ثبّتي **Node.js** (نسخة LTS) من nodejs.org
2. ثبّتي **Git** من git-scm.com
3. ثبّتي **VS Code**
4. اطلبي من مسؤولة الدمج تضيفك للمستودع، واقبلي الدعوة من إيميلك.

## مرة وحدة فقط: تنزيل المشروع

افتحي VS Code ← Terminal ← New Terminal، واكتبي:

```
git clone https://github.com/JenanBajawi/saudi-heritage-explorer.git
cd saudi-heritage-explorer
npm install
```

### عرّفي Git باسمك (مهم جدًا)

بدون هذي الخطوة ممكن يطلع شغلك باسم شخص ثاني:

```
git config user.name "اسم حسابك في GitHub"
git config user.email "إيميل حسابك في GitHub"
```

## كل مرة تبدين شغل جديد

### 1. حدّثي نسختك من آخر شغل الفريق

```
git checkout main
git pull
```

### 2. افتحي فرع خاص بشغلك

```
git checkout -b اسم-الفرع
```

أسماء الفروع المتفق عليها موجودة في [دليل الدمج](INTEGRATION_GUIDE.md).

### 3. اشتغلي وجربي

```
npm run dev
```

### 4. احفظي شغلك

من VS Code: أيقونة **Source Control** على اليسار ← اكتبي وصف واضح ← **Commit**.

أمثلة على وصف جيد:
- `إضافة بيانات معالم منطقة نجد`
- `إضافة مجسم قصر الفريد`
- `إصلاح اتجاه مجسم جبل الفيل`

### 5. ارفعي فرعك

اضغطي **Publish Branch** أو **Sync Changes**.

### 6. افتحي Pull Request

1. افتحي صفحة المستودع في GitHub.
2. بيطلع لك شريط أصفر فيه زر **Compare & pull request**، اضغطيه.
3. عبّي النموذج اللي يطلع لك.
4. اضغطي **Create pull request**.

مسؤولة الدمج بتراجع شغلك، وإذا فيه ملاحظات بتكتبها لك في نفس الصفحة.

## مشاكل شائعة

| المشكلة | الحل |
|---|---|
| `Permission denied` أو `403` | الجهاز مسجّل بحساب ثاني. اكتبي `cmdkey /delete:git:https://github.com` وارفعي من جديد |
| `running scripts is disabled` | اكتبي `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` |
| شغلي طلع باسم شخص ثاني | سوي خطوة «عرّفي Git باسمك» فوق |
| ما أقدر ألصق في التيرمنال | كليك يمين داخل التيرمنال، أو Ctrl+Shift+V |

## ممنوع

- `git push --force` ← ممكن يمسح شغل الفريق.
- رفع مجلد `node_modules`.
- رفع ملف `.env` أو أي مفتاح API.
