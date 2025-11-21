<p align="center">
  <img src="./banner.png" width="850" alt="Monza Styles Banner"/>
</p>

# 🎨 Monza Styles

**Monza Styles** is my lightweight SCSS toolkit designed to make styling fun, fast, and consistent.  
I built it for myself at first (because I got tired of rewriting spacing, colors, and typography),  
but now *you* can enjoy it too.

Use it with:

- Monza UI Components  
- Angular / React / Vue  
- HTML templates  
- Or any SCSS-based project  

Monza Styles gives you:

- ✨ Design tokens  
- 🎨 Color palettes  
- 🔧 Utility classes  
- 🧩 Mixins  
- ⚡ Runtime theming  

---

## 🎨 **Color Palette List**

These are the built-in palettes, each with shades **50 → 950**:

- **red**
- **rose**
- **violet**
- **malibu**
- **chartreuse**
- **amber**
- **silver**

## 🎨 **Class List**

### **Spacing Utilities**
| Selector | Declarations                             |
|----------|------------------------------------------|
| .m-$     | margin: $rem                             |
| .mt-$    | margin-top: $rem                         |
| .mb-$    | margin-bottom: $rem                      |
| .ml-$    | margin-left: $rem                        |
| .mr-$    | margin-right: $rem                       |
| .mx-$    | margin-left: $rem, margin-right: $rem    |
| .my-$    | margin-top: $rem, margin-bottom: $rem    |
| .p-$     | padding: $rem                            |
| .pt-$    | padding-top: $rem                        |
| .pb-$    | padding-bottom: $rem                     |
| .pl-$    | padding-left: $rem                       |
| .pr-$    | padding-right: $rem                      |
| .px-$    | padding-left: $rem, padding-right: $rem  |
| .py-$    | padding-top: $rem, padding-bottom: $rem  |
| .gap-$   | gap: $rem                                |
| .corner-$| border-raidus: $rem                      |
*You can replace **$** with numbers from **1 - 10***

### **Flexbox Utilities**
| Selector           | Declarations                   |
|--------------------|--------------------------------|
| .flex              | display: flex                  |
| .grid              | display: grid                  |
| .flex-col          | flex-direction: column         |
| .flex-row          | flex-direction: row            |
| .flex-center       | center both axes               |
| .flex-wrap         | flex-wrap: wrap                |
| .justify-center    | justify-content: center        |
| .justify-start     | justify-content: start         |
| .justify-end       | justify-content: end           |
| .justify-between   | justify-content: space-between |
| .justify-evenly    | justify-content: space-evenly  |
| .items-center      | align-items: center            |
| .items-start       | align-items: start             |
| .items-end         | align-items: end.              |

### **Text Utilities**
| Selector           | Declarations                   |
|--------------------|--------------------------------|
| .text-center       | text: center                   |
| .text-left         | text: left                     |
| .text-right        | text: right                    |
| .text-uppercase    | text: uppercase                |
| .text-capitalize   | text: capitalize               |
| .text-oneline      | text: no wrap                  |
| .text-ellipsis     | text: single-line & ellipsis   |
| .primary           | text-color: primary            |

---

## 🎨 **Mixin Usage**

```scss
@include mon.mon-typography('title-lg');
@include mon.mon-typography('title-md');
@include mon.mon-typography('title-sm');
@include mon.mon-typography('label-lg');
@include mon.mon-typography('label-md');
@include mon.mon-typography('label-sm');
@include mon.mon-typography('default');
@include mon.mon-typography('caption');
@include mon.mon-typography('footer');

@include mon.root-button();
@include mon.root-border();
@include mon.root-shadow(1);
@include mon.root-shadow(2);
@include mon.root-shadow(3);