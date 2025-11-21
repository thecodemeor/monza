<p align="center">
  <img src="./banner.png" width="850" alt="Monza Styles Banner"/>
</p>

# 🎨 Monza Styles

**Monza Styles** is a lightweight SCSS package containing **design tokens**,  
**color palettes**, **utilities**, and **mixins** used across the Monza Design System.

It provides the foundation for consistent UI styling across all Monza UI components  
and can also be used in any standalone Angular/React/Vue project.

---

## 🎨 Color Palette Names

The color system includes **7 base palettes**, each with **50–950 scale values**.

| Palette | Example Shades |
|--------|----------------|
| **red** | `red-50 … red-950` |
| **rose** | `rose-50 … rose-950` |
| **violet** | `violet-50 … violet-950` |
| **malibu** (default primary) | `malibu-50 … malibu-950` |
| **chartreuse** (default success) | `chartreuse-50 … chartreuse-950` |
| **amber** (default warning) | `amber-50 … amber-950` |
| **silver** (gray scale) | `silver-50 … silver-950` |

### How to access colors (inside tokens)
```scss
@use "monza-styles/tokens" as mon;

.my-box {
  background: var(--mon-color-primary);
  color: var(--mon-color-text);
}
