# Custom Domain Setup - corbyn.dev

This guide walks you through connecting your custom domain `corbyn.dev` to your Railway deployment.

## 🌐 Part 1: Railway Dashboard Setup

### Step 1: Add Custom Domain in Railway

1. Go to your Railway project dashboard
2. Click on your **service** (portfolio)
3. Go to the **"Settings"** tab
4. Scroll down to **"Domains"** section
5. Click **"+ Custom Domain"**
6. Enter: `corbyn.dev`
7. Railway will show you DNS records to add

### Step 2: Note the DNS Records

Railway will provide you with records like:

**For Root Domain (corbyn.dev):**
- **Type**: `A`
- **Name**: `@` (or leave blank)
- **Value**: Railway's IP address (e.g., `34.102.xxx.xxx`)

**OR (if Railway uses CNAME):**
- **Type**: `CNAME`
- **Name**: `@`
- **Value**: `yourproject.up.railway.app`

**For www subdomain (optional):**
- **Type**: `CNAME`
- **Name**: `www`
- **Value**: `yourproject.up.railway.app`

---

## 🔧 Part 2: DNS Configuration

### Where to Configure DNS

Go to your domain registrar where you bought `corbyn.dev`:

- **Namecheap**: Advanced DNS
- **GoDaddy**: DNS Management
- **Google Domains**: DNS
- **Cloudflare**: DNS
- **etc.**

### Add DNS Records

#### Option A: Using A Record (Recommended for Railway)

```
Type: A
Host: @
Value: [Railway's IP address]
TTL: Automatic (or 3600)
```

#### Option B: Using CNAME (if Railway provides it)

```
Type: CNAME
Host: @
Value: yourproject.up.railway.app
TTL: Automatic (or 3600)
```

#### For WWW Subdomain (Optional)

```
Type: CNAME
Host: www
Value: corbyn.dev (or yourproject.up.railway.app)
TTL: Automatic (or 3600)
```

---

## ⏱️ Part 3: Wait for DNS Propagation

- **DNS changes take time**: 5 minutes to 48 hours
- **Usually propagates in**: 15-30 minutes
- **Check status**: https://dnschecker.org/#A/corbyn.dev

---

## ✅ Part 4: Verify Setup

### Test Your Domain

1. Wait 15-30 minutes after adding DNS records
2. Visit: `https://corbyn.dev`
3. Visit: `https://www.corbyn.dev` (if you set it up)

### Check in Railway

In Railway dashboard:
- Your domain should show a **green checkmark** ✅
- Status should say **"Active"**

---

## 🔒 Part 5: SSL/HTTPS

Railway **automatically** provides free SSL certificates:
- Uses Let's Encrypt
- Auto-renews
- HTTPS enabled by default

Your site will be accessible at:
- ✅ `https://corbyn.dev`
- ✅ `https://www.corbyn.dev` (if configured)

---

## 🚨 Troubleshooting

### Domain not working after 30 minutes?

1. **Check DNS records** are correct in your registrar
2. **Clear browser cache**: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
3. **Test DNS propagation**: https://dnschecker.org
4. **Check Railway logs** for errors
5. **Verify domain status** in Railway dashboard

### Common Issues

**"DNS not found"**
- DNS records not added correctly
- Wait longer for propagation

**"SSL Certificate Pending"**
- Normal! Railway is generating your certificate
- Can take 10-15 minutes

**"Domain already in use"**
- Remove domain from Railway
- Re-add it
- Make sure DNS points to correct Railway project

---

## 📋 Quick Checklist

- [ ] Railway project deployed successfully
- [ ] Custom domain added in Railway dashboard
- [ ] DNS A or CNAME record added to registrar
- [ ] Waited 15-30 minutes for DNS propagation
- [ ] Domain shows active in Railway
- [ ] HTTPS working (green lock icon)
- [ ] `https://corbyn.dev` loads your portfolio

---

## 🎯 Final Result

After setup, your portfolio will be live at:
- 🌐 **https://corbyn.dev** - Your custom domain
- 🌐 **https://www.corbyn.dev** - WWW version (if configured)
- 🚂 **https://yourproject.up.railway.app** - Railway subdomain (still works)

---

## 💡 Pro Tips

1. **Use Cloudflare** for free DNS + CDN + DDoS protection
2. **Enable WWW redirect** so www.corbyn.dev → corbyn.dev
3. **Set up email forwarding** at your registrar for contact@corbyn.dev
4. **Monitor uptime** with Railway's built-in monitoring

---

Need help? Check Railway docs: https://docs.railway.app/guides/public-networking#custom-domains
