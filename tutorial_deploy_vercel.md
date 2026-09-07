# 🚀 Tutorial Deploy Portofolio Caroline ke Vercel

## Prasyarat
- Akun **GitHub** (sudah ada ✅ — repo `mazrohaaniss/portofolio-caroline`)
- Akun **Vercel** (gratis) — bisa daftar pakai akun GitHub

---

## Step 1: Commit & Push Perubahan Terbaru

Buka terminal di folder project, lalu jalankan:

```bash
git add .
git commit -m "cleanup: hapus file duplikat, bersihkan package.json & edit-mode.js"
git push origin main
```

> [!TIP]
> Pastikan semua perubahan sudah ter-push ke GitHub sebelum deploy.

---

## Step 2: Buat Akun Vercel (Kalau Belum Punya)

1. Buka **[vercel.com](https://vercel.com)**
2. Klik **"Sign Up"** (tombol di pojok kanan atas)
3. Pilih **"Continue with GitHub"**
4. Authorize Vercel untuk mengakses akun GitHub kamu
5. Selesai — kamu masuk ke Vercel Dashboard

---

## Step 3: Import Repository

1. Di Vercel Dashboard, klik tombol **"Add New..."** → **"Project"**
2. Kamu akan melihat daftar repository GitHub kamu
3. Cari **`portofolio-caroline`** lalu klik **"Import"**

> [!NOTE]
> Kalau repo tidak muncul, klik **"Adjust GitHub App Permissions"** dan tambahkan akses ke repo tersebut.

---

## Step 4: Konfigurasi Project

Vercel akan menampilkan halaman konfigurasi. **Biarkan semua default:**

| Setting | Nilai |
|---------|-------|
| **Framework Preset** | `Other` (auto-detect) |
| **Root Directory** | `./` (default) |
| **Build Command** | _(kosongkan — tidak perlu build)_ |
| **Output Directory** | _(kosongkan)_ |

Langsung klik **"Deploy"** 🚀

---

## Step 5: Tunggu Deploy Selesai

- Vercel akan memproses deploy (biasanya **10-30 detik** saja untuk static site)
- Kamu akan melihat progress bar dan preview screenshot
- Setelah selesai, akan muncul **🎉 Congratulations!** dengan preview website

---

## Step 6: Akses Website

Setelah deploy berhasil, kamu mendapat URL gratis:

```
https://portofolio-caroline.vercel.app
```

> [!IMPORTANT]
> URL default biasanya `[nama-repo].vercel.app`. Kalau sudah dipakai orang lain, Vercel akan menambahkan suffix random seperti `portofolio-caroline-xyz.vercel.app`.

---

## Step 7 (Opsional): Custom Domain

Kalau kamu punya domain sendiri (misal `carolinemaharani.com`):

1. Di Vercel Dashboard, buka project **portofolio-caroline**
2. Klik tab **"Settings"** → **"Domains"**
3. Ketik domain kamu → klik **"Add"**
4. Vercel akan memberikan DNS records yang perlu kamu set di provider domain kamu
5. Tunggu propagasi DNS (biasanya 5-30 menit)

---

## 🔄 Auto-Deploy (Fitur Otomatis)

Setelah setup, setiap kali kamu **push ke branch `main`**, Vercel otomatis deploy ulang! Jadi workflow-nya:

```bash
# Edit file...
git add .
git commit -m "update: perubahan terbaru"
git push origin main
# ⚡ Vercel otomatis deploy dalam hitungan detik!
```

---

## ❓ FAQ

### Perlu `vercel.json`?
**Tidak.** Project ini static HTML biasa, Vercel langsung detect dan serve `index.html`.

### Perlu `npm run build`?
**Tidak.** Tidak ada build step — file HTML/CSS/JS langsung di-serve.

### Apa gratis?
**Ya!** Vercel Hobby Plan gratis untuk project personal, termasuk:
- HTTPS otomatis (SSL)
- CDN global (website cepat diakses dari mana saja)
- Auto-deploy dari GitHub
- 100GB bandwidth/bulan

### Kalau mau ganti konten website?
Edit file di lokal → commit → push → otomatis deploy ulang.
