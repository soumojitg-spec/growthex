# Contact Page Setup - Manual Updates Required

## ✅ Completed:
1. ✅ Installed react-router-dom
2. ✅ Created `/src/pages/Contact.jsx` - Premium contact page
3. ✅ Created `/src/pages/Home.jsx` - Home page component
4. ✅ Updated `/src/App.jsx` - Added routing

## 📝 Manual Updates Needed:

### Update all components to use Link instead of <a> tags for /contact

Add this import to the top of each file:
```javascript
import { Link } from 'react-router-dom';
```

Then replace `<a href="#...">` with `<Link to="/contact">` for these buttons:

### Files to Update:

#### 1. **src/components/Hero.jsx**
- Line 2: Add `import { Link } from 'react-router-dom';`
- Line 72: Change `<a href="#audit"` to `<Link to="/contact"`
- Line 74: Change `</a>` to `</Link>`
- Line 76: Change `<a href="#demos"` to `<Link to="/contact"`
- Line 78: Change `</a>` to `</Link>`

#### 2. **src/components/Header.jsx**
- Add import: `import { Link } from 'react-router-dom';`
- Line 45: Change `<a href="#audit"` to `<Link to="/contact"`
- Line 48: Change `<a href="#audit"` to `<Link to="/contact"`
- Line 78: Change `<a href="#audit"` to `<Link to="/contact"`
- Line 81: Change `<a href="#audit"` to `<Link to="/contact"`
- Update all closing `</a>` to `</Link>`

#### 3. **src/components/FinalCTA.jsx**
- Add import: `import { Link } from 'react-router-dom';`
- Line 25: Change `href="#audit"` to `to="/contact"` and `<a` to `<Link`
- Line 32: Change `href="#demo"` to `to="/contact"` and `<a` to `<Link`
- Update closing tags

#### 4. **src/components/HowItWorks.jsx**
- Add import: `import { Link } from 'react-router-dom';`
- Line 71: Change `<a href="#audit"` to `<Link to="/contact"`
- Line 74: Change `<a href="#blueprint"` to `<Link to="/contact"`

#### 5. **src/components/Deliverables.jsx**
- Add import: `import { Link } from 'react-router-dom';`
- Line 71: Change `<a href="#contact"` to `<Link to="/contact"`

#### 6. **src/components/FAQ.jsx**
- Add import: `import { Link } from 'react-router-dom';`
- Line 98: Change `<a href="#contact"` to `<Link to="/contact"`

#### 7. **src/components/Pricing.jsx**
- Add import: `import { Link } from 'react-router-dom';`
- Line 155: Change `href="#contact"` to `to="/contact"` and `<a` to `<Link`

#### 8. **src/components/Footer.jsx**
- Add import: `import { Link } from 'react-router-dom';`
- Line 102: Change `href="#audit"` to `to="/contact"` and `<a` to `<Link`

## 🚀 Quick Find & Replace:

You can use your editor's find & replace:

**Find:** `href="#audit"`
**Replace:** `to="/contact"`

**Find:** `href="#demo"`
**Replace:** `to="/contact"`

**Find:** `href="#contact"`
**Replace:** `to="/contact"`

Then manually:
1. Add `import { Link } from 'react-router-dom';` to each file
2. Change `<a` to `<Link` for contact buttons
3. Change `</a>` to `</Link>` for contact buttons

## ✨ Result:
All "Book Free Audit", "Get Demo", and "Contact" buttons will navigate to `/contact` page!
