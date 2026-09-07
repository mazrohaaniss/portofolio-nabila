# 🚀 Panduan Lengkap Deploy Portofolio Nabila ke Vercel

## 1. Penyebab Error Sebelumnya (`Permission Denied` / Exit Code 126)
Error:
```
sh: line 1: /vercel/path0/node_modules/.bin/vite: Permission denied
Error: Command "npm run build" exited with 126
```
**Penyebabnya:** Folder `node_modules` sebelumnya sempat ter-push ke GitHub dari Windows. Di sistem Linux (server Vercel), file binary di dalam `node_modules/.bin/` kehilangan izin eksekusi (`chmod +x`).

**Solusi yang sudah dijalankan:**
1. File `.gitignore` sudah dibuat.
2. `node_modules` dan `dist` sudah dihapus dari git tracking.
3. Perubahan sudah di-commit dan di-push ke branch `main`.

---

## 2. Langkah-Langkah Deploy di Vercel

### Step 1: Buka Dashboard Vercel
1. Buka **[vercel.com](https://vercel.com)** dan login dengan akun GitHub Anda.
2. Di dashboard, klik tombol **"Add New..."** lalu pilih **"Project"**.

### Step 2: Import Repository
1. Cari repository **`portofolio-nabila`**.
2. Klik tombol **"Import"** di sebelah nama repo.
   *(Jika repo belum muncul, klik "Adjust GitHub App Permissions" lalu beri akses ke repo tersebut).*

### Step 3: Konfigurasi Project
Vercel akan otomatis mendeteksi konfigurasi Vite:
- **Framework Preset**: `Vite`
- **Root Directory**: `./`
- **Build Command**: `vite build` (atau `npm run build`)
- **Output Directory**: `dist`
- **Install Command**: `npm install`

> [!TIP]
> **Biarkan semua pengaturan default!** Tidak perlu mengubah toggle "Override" apapun.

### Step 4: Klik Deploy
1. Klik tombol **"Deploy"**.
2. Tunggu sekitar 30 - 60 detik saat Vercel menjalankan:
   - `npm install` (instalasi bersih di server Linux)
   - `vite build`
3. Setelah selesai, layar akan menampilkan konfeti **"Congratulations!"** dan link website aktif Anda (misal `https://portofolio-nabila.vercel.app`).

---

## 3. Jika Sebelumnya Sudah Pernah Buat Project di Vercel (Redeploy)
Jika project `portofolio-nabila` sudah ada di Vercel dan tadi statusnya "Failed":
1. Buka project tersebut di Vercel.
2. Buka tab **"Deployments"**.
3. Vercel biasanya akan otomatis mendeteksi push commit terbaru (`fix: remove node_modules and dist...`) dan langsung memulai deploy baru secara otomatis.
4. Atau Anda bisa klik titik tiga (**...**) pada commit terbaru lalu pilih **"Redeploy"**.
