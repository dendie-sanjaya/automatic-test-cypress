# Tutorial Lengkap: Automated Testing dengan Cypress

Selamat datang di panduan belajar **Automated Testing** menggunakan **Cypress**! 🚀

Panduan ini disusun khusus untuk pemula (orang awam) agar bisa memahami konsep *End-to-End (E2E) Testing* dan cara mengimplementasikannya langkah demi langkah.



## 📚 Daftar Isi

1. [Apa itu Cypress & E2E Testing?](#1-apa-itu-cypress--e2e-testing)
2. [Persiapan (Prerequisites)](#2-persiapan-prerequisites)
3. [Instalasi Proyek](#3-instalasi-proyek)
4. [Memahami Struktur Folder](#4-memahami-struktur-folder)
5. [Perintah Dasar Cypress](#5-perintah-dasar-cypress)
6. [Membuat Skenario Tes Pertama](#6-membuat-skenario-tes-pertama)
7. [Menjalankan Test](#7-menjalankan-test)



## 1. Software Testing Life Cycle (STLC)

STLC adalah siklus yang harus diikuti oleh tim QA (Quality Assurance) untuk memastikan aplikasi bekerja dengan baik.



1. Unit Testing

Pengujian ini fokus pada pengecekan logika paling dasar di dalam kode aplikasi, seperti memastikan fungsi hitung total belanja tidak salah menjumlahkan angka.

2. Functional Testing

Pengujian ini memastikan fitur aplikasi berjalan benar dari sisi pengguna, seperti menjamin tombol "bayar" benar-benar memproses pesanan hingga selesai.

3. Stress Testing

Pengujian ini dilakukan dengan membanjiri aplikasi dengan ribuan pengguna sekaligus untuk melihat kapan sistem akan melambat atau berhenti berfungsi.

4. Penetration Testing

Pengujian ini adalah simulasi serangan untuk mencari celah keamanan pada aplikasi agar data pengguna tidak mudah dicuri oleh peretas.


## 1. Apa itu Cypress & E2E Testing?


**Functional Testing** atau **E2E (End-to-End) Testing** adalah metode pengujian di mana kita mensimulasikan perilaku user sungguhan dari awal sampai akhir.

Bayangkan Anda punya robot yang bisa membuka browser, mengetik username, klik tombol login, dan memastikan Anda berhasil masuk ke halaman utama. Robot itulah **Cypress**.


## 2. Skema Bestpratci colaborantion E2E testing

![ss](./design/design-Cypres.jpg)

Cypress memungkinkan tim QA (Quality Assurance) bekerja secara paralel. Setiap QA bisa mengerjakan alur bisnis (flow) yang berbeda tanpa saling tumpang tindih.


## 2. Persiapan (Prerequisites)

Sebelum mulai, Anda wajib menginstal **Node.js** di komputer Anda.

1.  **Download Node.js**

Kunjungi situs resmi Node.js dan unduh versi LTS (Long Term Support).

![Cek Versi Node](ss/1.jpg)

![Cek Versi Node](ss/2.jpg)


2.  **Cek Instalasi**

Buka Terminal (Command Prompt/PowerShell) dan ketik perintah berikut untuk memastikan instalasi berhasil:

```bash
node -v
npm -v
```

![Cek Versi Node](ss/3.jpg)

![Cek Versi Node](ss/3-1.jpg)


## 3. Instalasi Proyek

Mari kita buat proyek test pertama kita dari nol.

**Langkah-langkah:**

1.  **Buat Folder Proyek**: Buat folder baru di komputer Anda, misal `project`.
2.  **Inisialisasi Proyek**: Buka terminal di dalam folder tersebut dan ketik:
    ```bash
    npm init -y
    ```
    Ini akan membuat file `package.json`.

    ![Cek Versi Node](ss/4.jpg)


3.  **Install Cypress**: Ketik perintah ini untuk mengunduh Cypress:
    ```bash
    npm install cypress --save-dev
    ```

4.  **Buka Cypress**: Setelah selesai install, buka aplikasi Cypress dengan perintah:
    ```bash
    npx cypress open
    ```
   ![Cek Versi Node](ss/5.jpg)

   ![Cek Versi Node](ss/6.jpg)

   ![Cek Versi Node](ss/7.jpg)

   ![Cek Versi Node](ss/8.jpg)

   ![Cek Versi Node](ss/9.jpg)

   ![Cek Versi Node](ss/10.jpg)


## 4. Memahami Struktur Folder

Setelah Cypress terbuka pertama kali, ia akan otomatis membuat beberapa folder penting. Sangat penting untuk memahami fungsinya.

![Struktur Folder](ss/12-structur-folder.jpg)

*   **`cypress/e2e`**:
    *   Di sinilah "otak" tes Anda berada. Semua file skenario tes (berakhiran `.cy.js`) disimpan di sini.
*   **`cypress/fixtures`**:
    *   Tempat menyimpan data dummy/palsu (biasanya format JSON). Contoh: data user untuk login (username, password).
*   **`cypress/support`**:
    *   Tempat menaruh kode yang bisa dipakai berulang-kali (reusable testing code) atau *custom commands* agar kode tes utama lebih rapi.
*   **`cypress.config.js`**:
    *   File konfigurasi global untuk Cypress. Anda bisa mengatur base URL website yang akan dites di sini. -> ![Config Global](ss/13-config-global.jpg)



## 5. Perintah Dasar Cypress

Cypress menggunakan bahasa manusiawi yang mudah dimengerti. Berikut "kamus" perintah yang paling sering dipakai:

| Perintah | Fungsi | Contoh Penggunaan |
| : | : | : |
| **`cy.visit()`** | Membuka alamat website (URL). | `cy.visit('https://google.com')` |
| **`cy.get()`** | Mencari elemen di halaman (tombol, kotak teks). | `cy.get('#username')` |
| **`cy.type()`** | Mengetik teks ke dalam input. | `cy.get('#username').type('budi123')` |
| **`cy.click()`** | Melakukan klik (tombol/link). | `cy.get('#btn-login').click()` |
| **`cy.contains()`** | Mencari elemen berdasarkan tulisan teks-nya. | `cy.contains('Login Berhasil')` |
| **`cy.should()`** | Melakukan validasi/pengecekan (Assertion). | `cy.get('.alert').should('be.visible')` |
| **`cy.wait()`** | Menunggu sekian detik (gunakan dgn bijak). | `cy.wait(1000)` (tunggu 1 detik) |



## 6. Membuat Skenario Tes Pertama

Mari kita buat skenario untuk **Login**.

1.  Buat file baru di folder `cypress/e2e` dengan nama `1-Skenario-Login.cy.js`.
2.  Tulis kode berikut (sesuaikan selector dengan website target Anda):

```javascript
describe('Skenario Test Login', () => {
    
  it('User berhasil login dengan data valid', () => {
    // 1. Buka halaman website
    cy.visit('https://website-toko-online.com/login');

    // 2. Masukkan Username
    cy.get('input[name="email"]').type('user@contoh.com');

    // 3. Masukkan Password
    cy.get('input[name="password"]').type('rahasia123');

    // 4. Klik Tombol Login
    cy.get('button[type="submit"]').click();

    // 5. Validasi: Harusnya redirect ke Dashboard
    cy.url().should('include', '/dashboard');
    cy.contains('Selamat Datang').should('be.visible');
  });

});
```
![Skenario Login Code](ss/16-skenario-login.jpg)

![Skenario Login Code](ss/14-skenario-login.jpg)


## 7. Menjalankan Test

Ada dua cara untuk menjalankan robot tes Anda:

### Cara 1: Menggunakan GUI (Mode Visual)
Cocok untuk debugging dan melihat langkah-langkah robot bekerja.

1.  Jalankan `npx cypress open`.
2.  Pilih "E2E Testing".
3.  Pilih browser (misal: Chrome).
4.  Klik file `1-Skenario-Login.cy.js`.
5.  Tonton robot bekerja!

![Skenario Login Code](ss/15-skenario-login.jpg)

![Skenario Login Code](ss/15-skenario-run-2.jpg)

![Skenario Login Code](ss/16-skenario-login-2.jpg)


### Cara 2: Menggunakan CLI (Mode Cepat/Headless)
Cocok untuk dijalankan di server atau CI/CD, tanpa membuka jendela browser.

Jalankan perintah ini di terminal:

```bash
npx cypress run --spec "cypress/e2e/1-Skenario-Login.cy.js"
```

Jika tes berhasil, Anda akan melihat laporan centang hijau (✅).

![Skenario Login Code](ss/16-skenario-login-cypress-run.jpg)

![Skenario Login Code](ss/16-skenario-login-cypress-run-2.jpg)


> **Tips Tambahan**:
> Anda bisa melihat seubah source code cypress di folder `project/` untuk explorati lebih jelas

