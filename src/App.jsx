import React, { useState, useEffect, useRef } from 'react'

function App() {
  const [activeSection, setActiveSection] = useState('splash')
  const [showContactModal, setShowContactModal] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [cursorVisible, setCursorVisible] = useState(false)
  const [loading, setLoading] = useState(true)

  const containerRef = useRef(null)

  useEffect(() => {
    // Loading animation
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Parallax mouse effect
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20
      setMousePos({ x, y })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleScroll = (e) => {
    const cards = document.querySelectorAll('.guitar-card, .archive-card, .splash-option')
    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect()
      const cardTop = rect.top + window.scrollY
      const windowHeight = window.innerHeight
      if (cardTop > windowHeight / 2) {
        card.style.opacity = '0.3'
        card.style.transform = `translateY(${(cardTop - windowHeight / 2) / 8}px)`
      } else {
        card.style.opacity = '1'
        card.style.transform = 'translateY(0)'
      }
    })
  }

  // Guitars named after astrological signs
  const guitars = [
    { id: 1, name: "ARIES", sign: "♈", type: "ORIGINAL | HEADLESS 7-STRING", price: "$4,200", desc: "Bold, aggressive, ahead of its time. Aerospace hardware, multiscale fanned frets." },
    { id: 2, name: "LEO", sign: "♌", type: "ORIGINAL | V-ALDER BODY", price: "$3,800", desc: "Commanding presence. Chambered mahogany with quilted maple cap. A stage warrior." },
    { id: 3, name: "SCORPIO", sign: "♏", type: "ORIGINAL | BARITONE", price: "$4,600", desc: "Dark, mysterious, transformative. 28-inch scale, sustainiac, abyss black finish." },
    { id: 4, name: "AQUARIUS", sign: "♒", type: "ORIGINAL | 8-STRING EXTENDED", price: "$5,800", desc: "Visionary, unconventional. Fan fretted, floating bridge, cosmic aesthetics." },
    { id: 5, name: "PISCES", sign: "♓", type: "ORIGINAL | SEMI-HOLLOW", price: "$6,500", desc: "Fluid, ethereal, transcendent. Chambered body, f-holes, sustain for days." },
    { id: 6, name: "SOLD - CAPRICORN", sign: "♑", type: "SOLD | CUSTOM", price: "SOLD", desc: "Disciplined, ambitious, achieved. Now in the hands of a master." },
  ]

  // Archive of cool builds
  const archive = [
    { id: 1, name: "NOVA 01", year: "2024", desc: "First exploration of asymmetrical body ergonomics. Redefined playing comfort.", icon: "🌟" },
    { id: 2, name: "VOID WALKER", year: "2023", desc: "Headless design with internal sustain chamber. Notes that never decay.", icon: "⚫" },
    { id: 3, name: "SPECTRAL", year: "2023", desc: "Holographic finish that shifts with viewing angle. Visual brilliance.", icon: "🌈" },
    { id: 4, name: "FLUX", year: "2022", desc: "Multiscale innovation. Each string optimized for perfect tension.", icon: "🌀" },
    { id: 5, name: "ECHO", year: "2022", desc: "Integrated acoustic chamber. Electric guitar with acoustic soul.", icon: "🔊" },
    { id: 6, name: "PRISM", year: "2021", desc: "Modular pickup system. Swap tones in seconds. Unlimited possibilities.", icon: "💎" },
  ]

  // Floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 3
  }))

  return (
    <div
      className="space-container"
      ref={containerRef}
      onMouseEnter={() => setCursorVisible(true)}
      onMouseLeave={() => setCursorVisible(false)}
    >
      {/* Real Hubble Galaxy Background - Pillars of Creation */}
      <div className="galaxy-bg" style={{ transform: `translateX(${-mousePos.x}px) translateY(${-mousePos.y}px)` }}></div>

      {/* Stars overlay for depth */}
      <div className="stars"></div>
      <div className="stars-2"></div>

      {/* Floating particles */}
      <div className="particles-container">
        {particles.map(p => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: `${p.delay}s`
            }}
          />
        ))}
      </div>

      {/* Sacred Geometry - subtle overlay */}
      <div className="sacred-geometry"></div>
      <div className="flower-of-life"></div>

      {/* Gemstones - floating elements */}
      <div className="gemstone gem-1">
        <svg width="40" height="40" viewBox="0 0 40 40">
          <polygon points="20,2 38,15 30,38 10,38 2,15" fill="currentColor" opacity="0.6"/>
        </svg>
      </div>
      <div className="gemstone gem-2">
        <svg width="35" height="35" viewBox="0 0 40 40">
          <polygon points="20,2 38,15 30,38 10,38 2,15" fill="currentColor" opacity="0.5"/>
        </svg>
      </div>
      <div className="gemstone gem-3">
        <svg width="30" height="30" viewBox="0 0 40 40">
          <polygon points="20,2 38,15 30,38 10,38 2,15" fill="currentColor" opacity="0.4"/>
        </svg>
      </div>
      <div className="gemstone gem-4">
        <svg width="45" height="45" viewBox="0 0 40 40">
          <polygon points="20,2 38,15 30,38 10,38 2,15" fill="currentColor" opacity="0.5"/>
        </svg>
      </div>
      <div className="gemstone gem-5">
        <svg width="38" height="38" viewBox="0 0 40 40">
          <polygon points="20,2 38,15 30,38 10,38 2,15" fill="currentColor" opacity="0.6"/>
        </svg>
      </div>

      {/* Loading screen */}
      {loading && (
        <div className="loading-screen">
          <div className="loading-ring"></div>
          <div className="loading-ring ring-2"></div>
          <div className="loading-text">TREELORE</div>
        </div>
      )}

      {/* Custom cursor */}
      {cursorVisible && (
        <div
          className="custom-cursor"
          style={{
            left: `${mousePos.x + window.innerWidth / 2}px`,
            top: `${mousePos.y + window.innerHeight / 2}px`
          }}
        />
      )}

      {/* Navigation - only shows when not on splash */}
      {!loading && activeSection !== 'splash' && (
        <nav className="space-nav">
          <div className="nav-logo">
            <svg className="tree-logo" viewBox="0 0 100 100" width="50" height="50">
              <circle cx="50" cy="50" r="48" fill="none" stroke="url(#tree-grad)" strokeWidth="2"/>
              <path d="M50 20 L50 45 M50 35 L35 50 M50 35 L65 50 M35 50 L35 70 M65 50 L65 70 M25 60 L50 45 M75 60 L50 45 M30 80 L50 70 M70 80 L50 70 M50 70 L50 85"
                fill="none" stroke="url(#tree-grad)" strokeWidth="3" strokeLinecap="round"/>
              <circle cx="50" cy="50" r="8" fill="none" stroke="#8b5cf6" strokeWidth="2"/>
              <defs>
                <linearGradient id="tree-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6"/>
                  <stop offset="100%" stopColor="#06b6d4"/>
                </linearGradient>
              </defs>
            </svg>
            <span>TREELORE</span>
            <span className="highlight">GUITARS</span>
          </div>
          <div className="nav-links">
            <button className="nav-btn" onClick={() => setActiveSection('splash')}>
              HOME
            </button>
            <button className={`nav-btn ${activeSection === 'collection' ? 'active' : ''}`} onClick={() => setActiveSection('collection')}>
              STARS
            </button>
            <button className={`nav-btn ${activeSection === 'archive' ? 'active' : ''}`} onClick={() => setActiveSection('archive')}>
              ARCHIVE
            </button>
            <button className={`nav-btn ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => setActiveSection('contact')}>
              CONTACT
            </button>
            <button className="nav-btn contact-btn" onClick={() => setShowContactModal(true)}>
              BEGIN
            </button>
          </div>
        </nav>
      )}

      {/* Splash Section */}
      {!loading && activeSection === 'splash' && (
        <section className="splash-section" onScroll={handleScroll}>
          <div className="splash-content">
            <div className="splash-logo">
              <svg className="tree-logo-huge" viewBox="0 0 200 200" width="200" height="200">
                <circle cx="100" cy="100" r="95" fill="none" stroke="url(#tree-grad-large)" strokeWidth="3"/>
                <path d="M100 40 L100 90 M100 70 L70 100 M100 70 L130 100 M70 100 L70 140 M130 100 L130 140 M50 120 L100 90 M150 120 L100 90 M60 160 L100 140 M140 160 L100 140 M100 140 L100 170"
                  fill="none" stroke="url(#tree-grad-large)" strokeWidth="5" strokeLinecap="round"/>
                <circle cx="100" cy="100" r="15" fill="none" stroke="#8b5cf6" strokeWidth="3"/>
                <circle cx="100" cy="100" r="4" fill="#06b6d4"/>
                <defs>
                  <linearGradient id="tree-grad-large" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6"/>
                    <stop offset="100%" stopColor="#06b6d4"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h1 className="splash-title">TREELORE</h1>
            <h2 className="splash-subtitle">GUITARS</h2>
            <p className="splash-tagline">
              ORIGINAL DESIGNS FOR MUSICIANS SEEKING A NEW BRUSH
            </p>
            <div className="splash-options">
              <button className="splash-option" onClick={() => setActiveSection('collection')}>
                <span className="option-icon">🎸</span>
                <span className="option-title">STARS</span>
                <span className="option-desc">Original designs</span>
              </button>
              <button className="splash-option" onClick={() => setActiveSection('archive')}>
                <span className="option-icon">📜</span>
                <span className="option-title">ARCHIVE</span>
                <span className="option-desc">Pimp builds</span>
              </button>
              <button className="splash-option" onClick={() => setActiveSection('contact')}>
                <span className="option-icon">📞</span>
                <span className="option-title">CONTACT</span>
                <span className="option-desc">Start your build</span>
              </button>
            </div>
            <div className="splash-footer">
              <p>100% ORIGINAL • NO STRATS • NO PAULS • ONLY INNOVATION</p>
              <p className="location">SAN JOSE, CA</p>
            </div>
          </div>
        </section>
      )}

      {/* Collection Section */}
      {!loading && activeSection === 'collection' && (
        <section className="section" onScroll={handleScroll}>
          <h2 className="section-title">THE ZODIAC SERIES</h2>
          <p className="section-subtitle">Every guitar is an original design. Not a Strat. Not a Paul. Something entirely yours.</p>
          <div className="guitar-grid">
            {guitars.map((guitar, index) => (
              <div key={guitar.id} className={`guitar-card ${guitar.type.includes('SOLD') ? 'sold' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="guitar-visual">
                  <span className="guitar-sign">{guitar.sign}</span>
                  <div className="card-glow"></div>
                </div>
                <div className="guitar-type">{guitar.type}</div>
                <h3 className="guitar-name">{guitar.name}</h3>
                <p className="guitar-desc">{guitar.desc}</p>
                <div className="guitar-price">{guitar.price}</div>
                {!guitar.type.includes('SOLD') && (
                  <button className="buy-btn space-btn" onClick={() => setShowContactModal(true)}>
                    INQUIRE
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Archive Section */}
      {!loading && activeSection === 'archive' && (
        <section className="section" onScroll={handleScroll}>
          <h2 className="section-title">ARCHIVE</h2>
          <p className="section-subtitle">A collection of experiments, innovations, and boundary-pushing builds. These guitars found their way to deserving hands.</p>
          <div className="archive-grid">
            {archive.map((item, index) => (
              <div key={item.id} className="archive-card" style={{ animationDelay: `${index * 0.08}s` }}>
                <div className="archive-icon">{item.icon}</div>
                <div className="archive-year">{item.year}</div>
                <h3 className="archive-name">{item.name}</h3>
                <p className="archive-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Contact Section */}
      {!loading && activeSection === 'contact' && (
        <section className="section contact-section">
          <h2 className="section-title">CONTACT</h2>
          <p className="section-subtitle">Your vision deserves an instrument as unique as your music.</p>
          <div className="contact-container">
            <div className="contact-info">
              <h3 className="contact-title">LET'S CREATE</h3>
              <p className="contact-text">
                Every great guitar starts with a conversation. Tell me about your vision—your playing style, your music, what moves you.
              </p>
              <p className="contact-text">
                I don't do production runs. I don't do knockoffs. I build one-of-a-kind instruments for musicians who demand something different.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-label">PHONE</span>
                  <span className="contact-value">408-420-4999</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">LOCATION</span>
                  <span className="contact-value">SAN JOSE, CA</span>
                </div>
              </div>
            </div>
            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Transmission received. TreeLore will respond within 24 hours.'); setShowContactModal(false); }}>
                <input type="text" placeholder="YOUR NAME" required className="space-input" />
                <input type="email" placeholder="YOUR EMAIL" required className="space-input" />
                <input type="tel" placeholder="YOUR PHONE" className="space-input" />
                <select className="space-input">
                  <option>WHAT BRINGS YOU HERE?</option>
                  <option>CUSTOM BUILD INQUIRY</option>
                  <option>GENERAL QUESTION</option>
                  <option>JUST WANT TO TALK GUITARS</option>
                </select>
                <textarea placeholder="TELL ME YOUR VISION..." rows="5" className="space-input"></textarea>
                <button type="submit" className="submit-btn space-btn">TRANSMIT</button>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      {!loading && activeSection !== 'splash' && (
        <footer className="space-footer">
          <div className="footer-content">
            <div className="footer-logo">
              <svg className="tree-logo-footer" viewBox="0 0 100 100" width="40" height="40">
                <circle cx="50" cy="50" r="48" fill="none" stroke="url(#tree-grad-footer)" strokeWidth="2"/>
                <path d="M50 20 L50 45 M50 35 L35 50 M50 35 L65 50 M35 50 L35 70 M65 50 L65 70 M25 60 L50 45 M75 60 L50 45 M30 80 L50 70 M70 80 L50 70 M50 70 L50 85"
                  fill="none" stroke="url(#tree-grad-footer)" strokeWidth="3" strokeLinecap="round"/>
                <circle cx="50" cy="50" r="8" fill="none" stroke="#8b5cf6" strokeWidth="2"/>
                <defs>
                  <linearGradient id="tree-grad-footer" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6"/>
                    <stop offset="100%" stopColor="#06b6d4"/>
                  </linearGradient>
                </defs>
              </svg>
              <span>TREELORE GUITARS</span>
            </div>
            <div className="footer-location">SAN JOSE, CA • 408-420-4999</div>
            <div className="footer-credits">B2B • OPEN TO PUBLIC • ORIGINAL DESIGNS • NO STRATS • NO PAULS</div>
          </div>
        </footer>
      )}

      {/* Quick Contact Modal (for other pages) */}
      {showContactModal && (
        <div className="modal-overlay" onClick={() => setShowContactModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowContactModal(false)}>✕</button>
            <h2 className="modal-title">BEGIN YOUR JOURNEY</h2>
            <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Transmission received. TreeLore will respond within 24 hours.'); setShowContactModal(false); }}>
              <input type="text" placeholder="YOUR NAME" required className="space-input" />
              <input type="email" placeholder="YOUR EMAIL" required className="space-input" />
              <textarea placeholder="TELL ME YOUR VISION..." rows="4" className="space-input"></textarea>
              <button type="submit" className="submit-btn space-btn">TRANSMIT</button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
