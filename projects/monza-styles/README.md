<p align="center">
  <img src="./banner.png" width="850" alt="Monza Styles Banner"/>
</p>

# 🎨 Monza Styles

Welcome to **Monza Styles** — my lightweight SCSS toolkit designed to make styling fun, fast, and consistent.  
I built it for myself at first (because I got tired of rewriting spacing, colors, and typography),  
but now *you* can enjoy it too ✨

Use it with:

- Monza UI Components 💛  
- Angular / React / Vue  
- HTML templates  
- Or any SCSS-based project  

Monza Styles gives you:

✨ Design tokens  
🎨 Color palettes  
🔧 Utility classes  
🧩 Mixins  
⚡ Runtime theming  

…all in one neat package.

---

## 🎨 **Color Palette List**

These are the built-in palettes, each with shades **50 → 950**:

- **red**
- **rose**
- **violet** (great for dark mode accents)
- **malibu** *(Default primary blue)*
- **chartreuse**
- **amber**
- **silver** *(neutral grayscale)*

Example usage:

```scss
.my-card {
  background: var(--mon-color-primary);
  border-color: var(--mon-color-border);
}
