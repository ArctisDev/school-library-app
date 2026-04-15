"use client"
import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

function getAnonId() {
  const K = 'plat_deploy_anon_id'
  const I = typeof window !== 'undefined' ? localStorage.getItem(K) : null
  if (I) return I
  const J = Math.random().toString(36).slice(2) + Date.now().toString(36)
  if (typeof window !== 'undefined') localStorage.setItem(K, J)
  return J
}

export default function AnalyticsClient() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  useEffect(() => {
    const B = "https://api.arctisdev.com/api/v1"
    const P = "8a827d"
    const A = window.location.hostname
    const D = /Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop'
    let T0 = Date.now()
    let sentEnd = false
    let currentPage = window.location.href
    
    function send(u: string) {
      try {
        const urlToSend = u || window.location.href
        
        // Enviar session_end da página anterior se mudou
        if (currentPage && currentPage !== urlToSend && !sentEnd) {
          sendSessionEnd()
        }
        
        // Resetar timer e flag para nova página
        T0 = Date.now()
        sentEnd = false
        currentPage = urlToSend
        
        let us: string | null = null, um: string | null = null, uc: string | null = null
        try { const s = new URL(urlToSend); us = s.searchParams.get('utm_source'); um = s.searchParams.get('utm_medium'); uc = s.searchParams.get('utm_campaign') } catch {}
        fetch(B + '/public/analytics/collect', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            event_type: 'pageview',
            project_id: P,
            site_id: A,
            page_url: urlToSend,
            referrer: document.referrer || '',
            utm_source: us,
            utm_medium: um,
            utm_campaign: uc,
            device: D,
            anon_id: getAnonId(),
            user_agent: navigator.userAgent,
            extras: { "script_version": "1.4.0" }
          })
        })
      } catch (e) {}
    }
    function sendClick(targetHref: string, text: string) {
      try {
        let internal = false
        try { const u = new URL(targetHref, window.location.href); internal = (u.hostname === window.location.hostname) } catch {}
        fetch(B + '/public/analytics/collect', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            event_type: 'click',
            project_id: P,
            site_id: A,
            page_url: window.location.href,
            referrer: document.referrer || '',
            device: D,
            anon_id: getAnonId(),
            user_agent: navigator.userAgent,
            extras: { "target": targetHref, "text": text || "", "internal": internal, "script_version": "1.4.0" }
          })
        })
      } catch (e) {}
    }
    const url = typeof window !== 'undefined' ? window.location.href : ''
    function sendSessionEnd() {
      if (sentEnd) return
      sentEnd = true
      try {
        const dur = Math.max(0, Date.now() - T0)
        fetch(B + '/public/analytics/collect', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            event_type: 'session_end',
            project_id: P,
            site_id: A,
            page_url: window.location.href,
            device: D,
            anon_id: getAnonId(),
            user_agent: navigator.userAgent,
            extras: { "duration_ms": dur, "script_version": "1.4.0" }
          })
        })
      } catch (e) {}
    }
    send(url)
    const handler = (e: MouseEvent) => {
      let t = e.target as HTMLElement | null
      while (t && (t as HTMLElement).tagName && (t as HTMLElement).tagName.toLowerCase() !== 'a') t = t.parentElement
      if (!t || !(t as HTMLElement).getAttribute) return
      const href = (t as HTMLElement).getAttribute('href')
      if (!href) return
      let abs = href
      try { abs = new URL(href, window.location.href).href } catch {}
      const text = ((t as HTMLElement).textContent || '').trim()
      sendClick(abs, text)
    }
    document.addEventListener('click', handler, true)
    const visHandler = () => { if (document.visibilityState === 'hidden') sendSessionEnd() }
    document.addEventListener('visibilitychange', visHandler)
    try { window.addEventListener('pagehide', () => sendSessionEnd(), { once: true }) } catch {}
    const errHandler = (e: ErrorEvent) => {
      try {
        const msg = String(e?.message || '')
        const src = String(e?.filename || '')
        const ln = Number(e?.lineno || 0)
        const cn = Number(e?.colno || 0)
        const stack = String(e?.error?.stack || '')
        const pagePath = (() => { try { return new URL(currentPage).pathname } catch { return '' } })()
        fetch(B + '/public/analytics/collect', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            event_type: 'js_error',
            project_id: P,
            site_id: A,
            page_url: currentPage,
            device: D,
            anon_id: getAnonId(),
            user_agent: navigator.userAgent,
            extras: { 
              "message": msg.slice(0,300), 
              "source": src.slice(0,500), 
              "lineno": ln, 
              "colno": cn,
              "stack": stack.slice(0,1000),
              "page_path": pagePath,
              "script_version": "1.4.0" 
            }
          })
        })
      } catch {}
    }
    window.addEventListener('error', errHandler)
    const sd = { 50:false, 75:false, 100:false } as Record<number, boolean>
    const checkSD = () => {
      const h = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight, document.documentElement.clientHeight)
      const st = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0
      const wh = window.innerHeight || document.documentElement.clientHeight || 0
      const pct = Math.round(((st + wh) / Math.max(1, h)) * 100)
      ;[50,75,100].forEach((p) => {
        if (!sd[p] && pct >= p) {
          sd[p] = true
          try {
            fetch(B + '/public/analytics/collect', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                event_type: 'scroll_depth',
                project_id: P,
                site_id: A,
                page_url: window.location.href,
                device: D,
                anon_id: getAnonId(),
                user_agent: navigator.userAgent,
                extras: { "percent": p, "script_version": "1.4.0" }
              })
            })
          } catch {}
        }
      })
    }
    const onScroll = () => { try { checkSD() } catch {} }
    try { window.addEventListener('scroll', onScroll, { passive: true }) } catch {}
    setTimeout(() => { try { checkSD() } catch {} }, 300)
    
    // Heartbeat: envia atualizações a cada 30s para melhorar precisão do tempo médio
    const heartbeatInterval = setInterval(() => {
      if (sentEnd) {
        clearInterval(heartbeatInterval)
        return
      }
      try {
        const dur = Math.max(0, Date.now() - T0)
        fetch(B + '/public/analytics/collect', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            event_type: 'heartbeat',
            project_id: P,
            site_id: A,
            page_url: currentPage || window.location.href,
            device: D,
            anon_id: getAnonId(),
            user_agent: navigator.userAgent,
            extras: { "duration_ms": dur, "script_version": "1.4.0" }
          })
        })
      } catch {}
    }, 30000)
    
    return () => {
      clearInterval(heartbeatInterval)
      document.removeEventListener('click', handler, true)
      document.removeEventListener('visibilitychange', visHandler)
      window.removeEventListener('error', errHandler)
      try { window.removeEventListener('scroll', onScroll) } catch {}
    }
  }, [])
  useEffect(() => {
    const B = "https://api.arctisdev.com/api/v1"
    const P = "8a827d"
    const A = window.location.hostname
    const D = /Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop'
    const url = typeof window !== 'undefined' ? (window.location.origin + pathname + (searchParams?.toString() ? ('?' + searchParams.toString()) : '')) : ''
    try {
      let us: string | null = null, um: string | null = null, uc: string | null = null
      try { const s = new URL(url); us = s.searchParams.get('utm_source'); um = s.searchParams.get('utm_medium'); uc = s.searchParams.get('utm_campaign') } catch {}
      fetch(B + '/public/analytics/collect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event_type: 'pageview',
          project_id: P,
          site_id: A,
          page_url: url,
          referrer: document.referrer || '',
          utm_source: us,
          utm_medium: um,
          utm_campaign: uc,
          device: D,
          anon_id: getAnonId(),
          user_agent: navigator.userAgent,
          extras: { "script_version": "1.4.0" }
        })
      })
    } catch {}
  }, [pathname, searchParams])
  return null
}
