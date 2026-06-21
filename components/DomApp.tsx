'use client';
import { useEffect } from 'react';

export default function DomApp() {
  useEffect(() => {
    import('../lib/app').then(({ CreativeCollective }) => {
      const appInstance = new CreativeCollective();
      (window as any).app = appInstance;
      appInstance.init();
    });
  }, []);

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container">
          {/* Logo with Dropdown Menu (Desktop Only) */}
          <div className="logo-dropdown-container">
            <div className="logo" id="logoDropdownTrigger">
              <h1>D<img src="/z.domlogov1.png" alt="ō" className="logo-o" />M</h1>
              <p className="logo-subtitle-mobile">Breathe • Be • Collaborate</p>
              <span className="dropdown-arrow">▼</span>
            </div>
            <nav className="dropdown-nav" id="dropdownNav">
              <button className="dropdown-nav-btn active" data-section="home">Home</button>
              <button className="dropdown-nav-btn" id="checkInDropdownBtn" data-section="checkin" style={{display: 'none'}}>Check In</button>
              <button className="dropdown-nav-btn" data-section="needs">Needs Board</button>
              <button className="dropdown-nav-btn" data-section="calendar">Events</button>
              <button className="dropdown-nav-btn" data-section="directory">Directory</button>
              <button className="dropdown-nav-btn" data-section="gallery">Gallery</button>
              <button className="dropdown-nav-btn" data-section="membership">Membership</button>
              <button className="dropdown-nav-btn" data-section="donate">Donate</button>
              <button className="dropdown-nav-btn" id="bookSpaceDropdownBtn" data-section="bookspace" style={{display: 'none'}}>Book the Space</button>
              <button className="dropdown-nav-btn" data-section="about">About</button>
              <button className="dropdown-nav-btn" id="profileDropdownBtn" data-section="profile" style={{display: 'none'}}>My Profile</button>
              <button className="dropdown-nav-btn" id="adminDropdownBtn" data-section="admin" style={{display: 'none'}}>⚙ Admin</button>
              <button className="dropdown-auth-btn" id="authDropdownBtn">Login</button>
            </nav>
          </div>

          {/* Desktop Tagline Bar */}
          <div className="tagline-bar">
            <span className="tagline-item">Breathe</span>
            <span className="tagline-separator">•</span>
            <span className="tagline-item">Be</span>
            <span className="tagline-separator">•</span>
            <span className="tagline-item">Collaborate</span>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button className="hamburger-btn" id="hamburgerBtn" aria-label="Toggle menu">&#9776;</button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <nav className="nav mobile-nav" id="mobileNav">
          <button className="nav-btn active" data-section="home">Home</button>
          <button className="nav-btn" id="checkInNavBtn" data-section="checkin" style={{display: 'none'}}>Check In</button>
          <button className="nav-btn" data-section="needs">Needs Board</button>
          <button className="nav-btn" data-section="calendar">Events</button>
          <button className="nav-btn" data-section="directory">Directory</button>
          <button className="nav-btn" data-section="gallery">Gallery</button>
          <button className="nav-btn" data-section="membership">Membership</button>
          <button className="nav-btn" data-section="donate">Donate</button>
          <button className="nav-btn" id="bookSpaceNavBtn" data-section="bookspace" style={{display: 'none'}}>Book the Space</button>
          <button className="nav-btn" data-section="about">About</button>
          <button className="nav-btn" id="profileNavBtn" data-section="profile" style={{display: 'none'}}>My Profile</button>
          <button className="nav-btn" id="adminNavBtn" data-section="admin" style={{display: 'none'}}>⚙ Admin</button>
          <button className="auth-btn" id="authBtn">Login</button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main">
        {/* HOME SECTION */}
        <section className="section active" id="home">
          <div className="container">
            {/* Home Check-In Widget */}
            <div className="home-checkin-widget" id="homeCheckinWidget">
              <div className="home-checkin-card">
                <span className="status-text" id="homeStatusText">You are OUT</span>
                <button className="circular-checkin-btn" id="homeToggleStatusBtn">
                  <span className="btn-inner">
                    <span className="btn-icon" id="homeToggleStatusIcon">○</span>
                    <span className="btn-text" id="homeToggleStatusText">Check In</span>
                  </span>
                </button>
                <p className="status-time" id="homeStatusTime"></p>
              </div>
            </div>

            {/* Hero */}
            <div className="hero">
              <h2>Find Your Perfect Creative Collaborator</h2>
              <p>Connect with talented creatives, showcase your work, and find the perfect collaborator for your next project.</p>

              {/* Monthly Support Progress Bar */}
              <div className="support-bar-section">
                <div className="support-bar-header">
                  <span className="support-bar-title">Keep the DoM space alive!</span>
                  <span className="support-bar-amount" id="progressAmount">$0 / $2,000</span>
                </div>
                <div className="support-bar-tube" role="progressbar" aria-valuemin={0} aria-valuemax={2000}>
                  <div className="support-bar-liquid" id="progressLiquid"></div>
                  <div className="support-bar-shine"></div>
                </div>
                <p className="support-bar-meta">Memberships &middot; Donations &middot; Ticket Sales &middot; Space Contributions</p>
              </div>

              {/* Open/Closed Status Indicator */}
              <div className="space-status-indicator" id="spaceStatusIndicator">
                <div className="space-status-glow" id="spaceStatusGlow"></div>
                <span className="space-status-text" id="spaceStatusText">CLOSED</span>
              </div>
              <div id="adminSpaceToggleArea" style={{display: 'none'}}>
                <button id="adminToggleSpaceBtn" onClick={() => (window as any).app?.toggleSpaceStatus()}>Force Open</button>
                <button id="adminResetAutoBtn" onClick={() => (window as any).app?.resetSpaceToAuto()} style={{display: 'none'}}>Reset to Auto</button>
              </div>

              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number" id="memberCount">0</span>
                  <span className="stat-label">Active Members</span>
                </div>
                <div className="stat">
                  <span className="stat-number" id="checkedInCount">0</span>
                  <span className="stat-label">Checked In</span>
                </div>
                <div className="stat">
                  <span className="stat-number" id="needsCount">0</span>
                  <span className="stat-label">Open Needs</span>
                </div>
                <div className="stat">
                  <span className="stat-number" id="eventsCount">0</span>
                  <span className="stat-label">Upcoming Events</span>
                </div>
              </div>
            </div>

            {/* Upcoming Events Preview */}
            <div className="featured-section">
              <h3>Upcoming Events</h3>
              <div id="upcomingEvents"></div>
            </div>

            {/* Latest Needs */}
            <div className="featured-section">
              <h3>Latest Needs</h3>
              <div className="needs-preview" id="latestNeeds"></div>
            </div>
          </div>
        </section>

        {/* CHECK-IN SECTION */}
        <section className="section" id="checkin">
          <div className="container">
            <div className="section-header">
              <h2>DōM Space Check-In</h2>
            </div>
            <div className="checkin-container" id="userCheckinCard" style={{display: 'none'}}>
              <div className="checkin-status-card">
                <h3>Your Status</h3>
                <div className="current-status-display">
                  <div className="status-indicator-text" id="userStatusIndicator">
                    <span className="status-text" id="userStatusText">Checking...</span>
                  </div>
                  <button className="circular-checkin-btn" id="toggleStatusBtn">
                    <span className="btn-inner">
                      <span className="btn-icon" id="toggleStatusIcon">●</span>
                      <span className="btn-text" id="toggleStatusText">Check In</span>
                    </span>
                  </button>
                  <p className="status-time" id="userStatusTime"></p>
                </div>
              </div>
            </div>
            <div className="admin-checkin-controls" id="adminCheckinControls" style={{display: 'none'}}>
              <h3>Admin Controls - Who&apos;s in the Space</h3>
              <div className="checkin-stats">
                <div className="stat-card">
                  <span className="stat-number" id="totalInSpace">0</span>
                  <span className="stat-label">Currently In</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number" id="totalCheckedOut">0</span>
                  <span className="stat-label">Checked Out</span>
                </div>
              </div>
              <div className="checkin-filters">
                <button className="filter-btn active" data-filter="all">All Members</button>
                <button className="filter-btn" data-filter="in">In Space</button>
                <button className="filter-btn" data-filter="out">Checked Out</button>
              </div>
              <div className="checkin-list" id="adminCheckinList"></div>
              <div className="activity-log">
                <div className="activity-log-header">
                  <h3>Activity Log</h3>
                  <div className="activity-log-nav">
                    <button className="btn btn-outline btn-sm" id="activityPrevWeek">◀ PREV</button>
                    <span className="activity-log-date" id="activityWeekLabel">Week of Jan 27</span>
                    <button className="btn btn-outline btn-sm" id="activityNextWeek">NEXT ▶</button>
                  </div>
                </div>
                <div className="activity-log-summary" id="activitySummary"></div>
                <div className="activity-week-grid" id="activityWeekGrid"></div>
              </div>
            </div>
            <div className="access-denied" id="checkinAccessDenied" style={{display: 'none'}}>
              <h3>Members Only</h3>
              <p>Please sign in to check in or out of the space.</p>
            </div>
          </div>
        </section>

        {/* DIRECTORY SECTION */}
        <section className="section" id="directory">
          <div className="container">
            <div className="section-header">
              <h2>Member Directory</h2>
              <div className="search-filters">
                <input type="text" id="memberSearch" placeholder="Search members..." />
                <select id="skillFilter">
                  <option value="">All Skills</option>
                </select>
              </div>
            </div>
            <div className="member-grid" id="memberGrid"></div>
          </div>
        </section>

        {/* NEEDS BOARD SECTION */}
        <section className="section" id="needs">
          <div className="container">
            <div className="section-header">
              <h2>Mission Board</h2>
              <button className="btn btn-primary" id="postNeedBtn">Post a Mission</button>
            </div>
            <div className="mission-board" id="needsGrid"></div>
          </div>
        </section>

        {/* CALENDAR SECTION */}
        <section className="section" id="calendar">
          <div className="container">
            <div className="section-header">
              <h2>Community Events</h2>
              <button className="btn btn-primary" id="createEventBtn" style={{display: 'none'}}>Create Event</button>
            </div>
            <div className="events-section">
              <div className="native-cal-header">
                <div className="native-cal-nav">
                  <button className="native-cal-btn" id="calPrevMonth">&#8249;</button>
                  <span className="native-cal-month-label" id="calMonthLabel">Loading...</span>
                  <button className="native-cal-btn" id="calNextMonth">&#8250;</button>
                  <button className="native-cal-btn native-cal-today-btn" id="calTodayBtn">Today</button>
                </div>
              </div>
              <div id="nativeCalGrid" className="native-cal-grid"></div>
              <div id="nativeCalDayPanel" className="native-cal-day-panel" style={{display: 'none'}}></div>
            </div>
            <div id="adminRsvpSection" style={{display: 'none'}}>
              <div className="section-header" style={{marginTop: '2rem'}}>
                <h3>Event RSVPs</h3>
              </div>
              <div id="adminRsvpPanel"></div>
            </div>
            <div className="google-calendar-section">
              <h3>Community Calendar</h3>
              <iframe
                src="https://calendar.google.com/calendar/embed?src=d392dc35dbd1a2f8807f396fcc095f16fe662aaabce1ac6df94e2100aae3378c%40group.calendar.google.com&ctz=America%2FNew_York"
                style={{border: '4px solid #000'}}
                width="100%"
                height="600"
                frameBorder={0}
                scrolling="no">
              </iframe>
            </div>
          </div>
        </section>

        {/* MEMBERSHIP SECTION */}
        <section className="section" id="membership">
          <div className="container">
            <div className="membership-header">
              <h2>Membership Tiers</h2>
              <p className="membership-subtitle">Choose the level that fits your creative journey</p>
            </div>
            <div id="currentMembershipStatus" className="current-membership-status" style={{display: 'none'}}>
              <div className="status-card">
                <h3>Your Current Membership</h3>
                <div className="current-tier-display">
                  <span className="tier-name" id="currentTierName">Creator</span>
                  <span className="tier-status" id="currentTierStatus">Active</span>
                </div>
                <button className="btn btn-outline" id="manageMembershipBtn">Manage Subscription</button>
              </div>
            </div>
            <div className="membership-tiers-grid">
              <div className="tier-card" data-tier="visitor">
                <div className="tier-header">
                  <h3 className="tier-title">Community</h3>
                  <div className="tier-price">
                    <span className="price-amount">$0</span>
                    <span className="price-period">/month</span>
                  </div>
                </div>
                <div className="tier-description">
                  <p>DōM&apos;s doors are open to all. Create a free account to participate in the collective, attend events, and access the community network.</p>
                </div>
                <div className="tier-features">
                  <h4>What&apos;s Included:</h4>
                  <ul>
                    <li>Account required to access anything</li>
                    <li>Check-in required every visit</li>
                    <li>Access during open hours only (9am–4pm)</li>
                    <li>Can be let in by a Creator member outside open hours</li>
                    <li>Access to clubs and gatherings as participant</li>
                    <li>Directory listing, needs board visibility, community events</li>
                  </ul>
                </div>
                <button className="btn btn-outline tier-select-btn" data-tier="visitor" data-price="0">Current Tier</button>
              </div>
              <div className="tier-card tier-featured" data-tier="member">
                <div className="tier-badge">Most Popular</div>
                <div className="tier-header">
                  <h3 className="tier-title">Creator</h3>
                  <div className="tier-price">
                    <span className="price-amount">$15</span>
                    <span className="price-period">/month</span>
                  </div>
                </div>
                <div className="tier-description">
                  <p>Ready to create? Get independent access, event discounts, a presence in the DōM community, and the ability to post to the needs board.</p>
                </div>
                <div className="tier-features">
                  <h4>Everything in Community, plus:</h4>
                  <ul>
                    <li>Door access during open hours independently</li>
                    <li>Event discounts / waived fees as attendee</li>
                    <li>Active role in clubs (not just participant)</li>
                    <li>Showcase on website</li>
                    <li>Ability to post to needs board</li>
                    <li>Priority studio booking when studio goes live</li>
                  </ul>
                </div>
                <button className="btn btn-primary tier-select-btn" data-tier="member" data-price="15">Select Creator</button>
              </div>
              <div className="tier-card" data-tier="contributor">
                <div className="tier-header">
                  <h3 className="tier-title">Collaborator</h3>
                  <div className="tier-price">
                    <span className="price-amount">$40</span>
                    <span className="price-period">/month</span>
                  </div>
                </div>
                <div className="tier-description">
                  <p>For those ready to shape DōM. Get a door code, host events, access the full studio when live, and sell your work through the website.</p>
                </div>
                <div className="tier-features">
                  <h4>Everything in Creator, plus:</h4>
                  <ul>
                    <li>Door code — access outside open hours</li>
                    <li>Can host and organize DōM events</li>
                    <li>Full studio access (photo + music) when live</li>
                    <li>Sell work through website</li>
                    <li>Priority event scheduling</li>
                    <li>Must still go through Catalist for event approval</li>
                  </ul>
                </div>
                <button className="btn btn-primary tier-select-btn" data-tier="contributor" data-price="40">Select Collaborator</button>
              </div>
            </div>
            <div className="tier-contributor-section">
              <div className="tier-contributor-card">
                <div className="tier-contributor-inner">
                  <div className="tier-contributor-info">
                    <div className="tier-contributor-header">
                      <h3 className="tier-title">Contributor</h3>
                      <div className="tier-price">
                        <span className="price-amount">$75+</span>
                        <span className="price-period">/ your call</span>
                      </div>
                    </div>
                    <p>Want to give back more? Contributor is a donation tier for members who want to go above and beyond in supporting DōM. Same access as Collaborator — every dollar goes directly to keeping the space alive and growing.</p>
                  </div>
                  <div className="tier-contributor-features">
                    <h4>Everything in Collaborator, plus:</h4>
                    <ul>
                      <li>The satisfaction of sustaining a creative community</li>
                      <li>Pay whatever feels right — $50 minimum, no ceiling</li>
                      <li>For those who want to invest in the community, not just access it</li>
                    </ul>
                    <button className="btn btn-primary" onClick={() => (window as any).app?.showSection('donate')}>Contribute Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="membership-faq">
              <h3>Frequently Asked Questions</h3>
              <div className="faq-item">
                <h4>Can I cancel anytime?</h4>
                <p>Yes! You can cancel your membership at any time. You&apos;ll continue to have access until the end of your billing period.</p>
              </div>
              <div className="faq-item">
                <h4>Can I upgrade or downgrade my tier?</h4>
                <p>Absolutely! You can change your membership tier at any time. Upgrades take effect immediately, while downgrades take effect at the end of your current billing period.</p>
              </div>
              <div className="faq-item">
                <h4>What payment methods do you accept?</h4>
                <p>We accept all major credit cards through Stripe&apos;s secure payment processing.</p>
              </div>
              <div className="faq-item">
                <h4>Is there a trial period?</h4>
                <p>Start with a free Community account to explore DōM. When you&apos;re ready to get more involved, upgrade to Creator or Collaborator!</p>
              </div>
              <div className="faq-item">
                <h4>What is Catalist?</h4>
                <p>Catalist is an internal role for DōM board members and staff. It&apos;s not a purchasable tier — Catalists are the people who approve access, greenlight events, and keep the collective running.</p>
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY SECTION */}
        <section className="section" id="gallery">
          <div className="container">
            <div className="section-header">
              <h2>Art Gallery</h2>
              <button className="btn btn-primary" id="addPaintingBtn" style={{display: 'none'}}>Add Painting</button>
            </div>
            <div className="gallery-paintings-grid" id="galleryGrid">
              <p className="empty-state">Loading gallery...</p>
            </div>
          </div>
        </section>

        {/* PROFILE SECTION */}
        <section className="section" id="profile">
          <div className="profile-container">
            <form id="profileForm">
              <div className="profile-col profile-col-left">
                <div className="profile-top-row">
                  <div className="profile-top-info">
                    <div className="form-group">
                      <label htmlFor="profileName">Full Name</label>
                      <input type="text" id="profileName" required disabled />
                    </div>
                    <div className="form-group">
                      <label htmlFor="profileEmail">Email</label>
                      <input type="email" id="profileEmail" disabled />
                    </div>
                    <div className="form-group">
                      <label htmlFor="profilePhone">Phone</label>
                      <input type="tel" id="profilePhone" placeholder="Optional" disabled />
                    </div>
                  </div>
                  <div className="profile-avatar-wrapper">
                    <div className="profile-avatar-display" id="profileAvatarDisplay">
                      <div className="avatar-placeholder">Photo</div>
                    </div>
                    <div id="userStatusBanner" className="profile-tier-badge">
                      <span id="statusText">Loading status...</span>
                    </div>
                  </div>
                </div>
                <div className="form-group profile-photos-group">
                  <label>Profile Photos</label>
                  <input type="file" id="profilePhotosInput" accept="image/*" multiple disabled style={{padding: '1rem', border: '3px solid #000', background: '#fff', fontWeight: 700, cursor: 'pointer', width: '100%'}} />
                  <input type="url" id="profileAvatar" style={{display: 'none'}} />
                  <p id="avatarUploadStatus" style={{fontSize: '0.9rem', marginTop: '0.5rem', fontWeight: 700}}></p>
                  <div id="profilePhotosGrid" className="profile-photos-grid"></div>
                </div>
                <div className="form-group">
                  <label htmlFor="profileSkills">Tags</label>
                  <input type="text" id="profileSkills" placeholder="e.g., Web Design, Photography, Writing" disabled />
                  <div className="skills-suggestions">
                    <span className="skill-tag" data-skill="Web Design">Web Design</span>
                    <span className="skill-tag" data-skill="Graphic Design">Graphic Design</span>
                    <span className="skill-tag" data-skill="Photography">Photography</span>
                    <span className="skill-tag" data-skill="Writing">Writing</span>
                    <span className="skill-tag" data-skill="Video Production">Video Production</span>
                    <span className="skill-tag" data-skill="Music Production">Music Production</span>
                    <span className="skill-tag" data-skill="Illustration">Illustration</span>
                    <span className="skill-tag" data-skill="Marketing">Marketing</span>
                    <span className="skill-tag" data-skill="3D Modeling">3D Modeling</span>
                    <span className="skill-tag" data-skill="Animation">Animation</span>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="profileBio">Bio</label>
                  <textarea id="profileBio" rows={4} placeholder="Tell us about yourself and your creative work..." disabled></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="profilePortfolio">Portfolio Website</label>
                  <input type="url" id="profilePortfolio" placeholder="Optional" disabled />
                </div>
                <div className="form-group">
                  <label htmlFor="profileInstagram">Instagram</label>
                  <input type="text" id="profileInstagram" placeholder="Optional" disabled />
                </div>
                <div className="form-group">
                  <label htmlFor="profileLinkedin">LinkedIn</label>
                  <input type="text" id="profileLinkedin" placeholder="Optional" disabled />
                </div>
                <div className="form-group">
                  <label htmlFor="profileWebsite">Personal Website</label>
                  <input type="url" id="profileWebsite" placeholder="Optional" disabled />
                </div>
                <div className="form-group">
                  <label htmlFor="profileSocial">Other Social</label>
                  <input type="text" id="profileSocial" placeholder="Optional" disabled />
                </div>
                <div className="form-group">
                  <label htmlFor="profileContact">Contact Info</label>
                  <input type="text" id="profileContact" placeholder="Preferred contact method" disabled />
                </div>
              </div>
              <div className="profile-col profile-col-right">
                <div className="profile-portfolio-header">
                  <h3>Portfolio</h3>
                  <button type="button" className="btn btn-outline" id="addProjectBtn" disabled>Add Project +</button>
                </div>
                <div id="portfolioProjects">
                  <p className="empty-state">Add projects to showcase your work</p>
                </div>
              </div>
              <div className="profile-actions-bar">
                <button type="button" className="btn btn-primary" id="profileEditBtn">Edit Profile</button>
                <button type="button" className="btn btn-danger" id="deleteAccountBtn" style={{marginTop: '2rem', background: 'transparent', color: '#c00', borderColor: '#c00', width: '100%', fontSize: '0.85rem'}}>Delete Account</button>
              </div>
            </form>
          </div>
        </section>

        {/* BOOK THE SPACE SECTION */}
        <section className="section" id="bookspace">
          <div className="container">
            <div className="bookspace-hero">
              <h2>Book the DōM Space</h2>
              <p>Requesting access to the space for a shoot, session, gathering, or something else entirely? Fill out the form below and we&apos;ll be in touch.</p>
            </div>
            <div id="bookSpaceForm" style={{display: 'none'}}>
              <form id="spaceRequestForm">
                <div className="form-group">
                  <label>Type of Use <span className="required">*</span></label>
                  <p className="form-hint">Select all that apply</p>
                  <div className="use-type-grid">
                    <label className="use-type-tile">
                      <input type="checkbox" name="useType" value="Photography" />
                      <span className="use-type-icon">📷</span>
                      <span className="use-type-label">Photography</span>
                    </label>
                    <label className="use-type-tile">
                      <input type="checkbox" name="useType" value="Filming" />
                      <span className="use-type-icon">🎬</span>
                      <span className="use-type-label">Filming</span>
                    </label>
                    <label className="use-type-tile">
                      <input type="checkbox" name="useType" value="Event / Performance" />
                      <span className="use-type-icon">🎭</span>
                      <span className="use-type-label">Event / Performance</span>
                    </label>
                    <label className="use-type-tile">
                      <input type="checkbox" name="useType" value="Meeting" />
                      <span className="use-type-icon">🤝</span>
                      <span className="use-type-label">Meeting</span>
                    </label>
                    <label className="use-type-tile">
                      <input type="checkbox" name="useType" value="Workshop" />
                      <span className="use-type-icon">🛠</span>
                      <span className="use-type-label">Workshop</span>
                    </label>
                    <label className="use-type-tile">
                      <input type="checkbox" name="useType" value="Other" />
                      <span className="use-type-icon">✦</span>
                      <span className="use-type-label">Other</span>
                    </label>
                  </div>
                </div>
                <div className="bookspace-form-grid">
                  <div className="form-group">
                    <label htmlFor="requestTitle">Session / Event Title <span className="required">*</span></label>
                    <input type="text" id="requestTitle" placeholder="What should we call this?" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="requestDate">Date <span className="required">*</span></label>
                    <input type="date" id="requestDate" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="requestStartTime">Start Time <span className="required">*</span></label>
                    <input type="time" id="requestStartTime" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="requestEndTime">End Time <span className="required">*</span></label>
                    <input type="time" id="requestEndTime" required />
                  </div>
                </div>
                <div id="bookingConflictIndicator" className="booking-conflict-indicator"></div>
                <div className="bookspace-form-grid">
                  <div className="form-group">
                    <label htmlFor="requestHeadcount">Estimated # of People <span className="required">*</span></label>
                    <input type="number" id="requestHeadcount" min={1} max={100} placeholder="e.g. 5" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="requestEquipment">Bringing Equipment?</label>
                    <select id="requestEquipment">
                      <option value="No">No</option>
                      <option value="Yes — minimal (tripod, camera, etc.)">Yes — minimal (tripod, camera, etc.)</option>
                      <option value="Yes — significant (lights, rigs, speakers, etc.)">Yes — significant (lights, rigs, speakers, etc.)</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="requestDescription">Describe Your Use of the Space <span className="required">*</span></label>
                  <textarea id="requestDescription" rows={5} placeholder="Tell us about what you're planning. The more detail, the better we can prepare." required></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="requestSpecialNeeds">Special Needs or Requirements</label>
                  <textarea id="requestSpecialNeeds" rows={3} placeholder="Specific setup, access needs, anything else we should know..."></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="requestContact">Best Way to Reach You <span className="required">*</span></label>
                  <input type="text" id="requestContact" placeholder="Phone, email, Instagram — whatever works" required />
                </div>
                <div className="form-group contribution-group">
                  <label>Contribution</label>
                  <p className="form-hint">DōM runs on community support. Tell us what works for you.</p>
                  <div className="contribution-mode-grid">
                    <label className="contribution-mode-tile selected" data-mode="financial">
                      <input type="radio" name="contributionMode" value="financial" defaultChecked onChange={() => (window as any).app?.updateContributionMode('financial')} />
                      <span className="mode-icon">$</span>
                      <span className="mode-label">Financial</span>
                    </label>
                    <label className="contribution-mode-tile" data-mode="inkind">
                      <input type="radio" name="contributionMode" value="inkind" onChange={() => (window as any).app?.updateContributionMode('inkind')} />
                      <span className="mode-icon">↔</span>
                      <span className="mode-label">In-Kind / Trade</span>
                    </label>
                    <label className="contribution-mode-tile" data-mode="community">
                      <input type="radio" name="contributionMode" value="community" onChange={() => (window as any).app?.updateContributionMode('community')} />
                      <span className="mode-icon">◯</span>
                      <span className="mode-label">Let&apos;s Talk</span>
                    </label>
                  </div>
                  <div id="contribution-financial">
                    <div className="contribution-slider-wrapper">
                      <div className="contribution-display">
                        <span className="contribution-amount" id="contributionDisplay">$0</span>
                        <span className="contribution-label" id="contributionLabel">Open Conversation</span>
                      </div>
                      <div className="slider-outer">
                        <div className="custom-slider-track">
                          <div className="custom-slider-thumb" id="contributionThumb"></div>
                        </div>
                        <input type="range" id="contributionSlider" min={0} max={300} step={5} defaultValue={0} className="contribution-slider-native" onInput={() => (window as any).app?.updateContributionDisplay()} />
                      </div>
                      <div className="contribution-scale">
                        <span>$0</span>
                        <span>$75</span>
                        <span>$150</span>
                        <span>$225</span>
                        <span>$300+</span>
                      </div>
                    </div>
                  </div>
                  <div id="contribution-inkind" style={{display: 'none'}}>
                    <textarea id="inkindDescription" rows={3} placeholder="What can you offer? Skills, labor, services, equipment, materials, documentation — describe what works for you." style={{marginTop: '1.25rem'}}></textarea>
                  </div>
                  <div id="contribution-community" style={{display: 'none'}}>
                    <p className="community-rate-note">That&apos;s okay — submit your request and we&apos;ll figure it out together. Just describe your use of the space above and we&apos;ll be in touch.</p>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary bookspace-submit-btn">Submit Request</button>
              </form>
            </div>
            <div id="bookSpaceLoginPrompt" className="access-denied" style={{display: 'none'}}>
              <h3>Members Only</h3>
              <p>Please log in to request use of the DōM space.</p>
              <button className="btn btn-primary" onClick={() => (window as any).app?.showAuthModal()}>Log In</button>
            </div>
            <div id="spaceRequestsAdmin" style={{display: 'none'}}>
              <div className="admin-requests-header">
                <h3>Space Requests</h3>
                <button className="btn btn-outline btn-sm" id="refreshRequestsBtn">Refresh</button>
              </div>
              <div id="spaceRequestsList" className="space-requests-list">
                <p className="empty-state">Loading requests...</p>
              </div>
            </div>
          </div>
        </section>

        {/* DONATE SECTION */}
        <section className="section" id="donate">
          <div className="container">
            <div className="donate-hero">
              <h2>Support DōM</h2>
              <p>Every contribution keeps the space alive — the lights on, the doors open, the community growing. Give what you can.</p>
            </div>
            <div className="donate-card">
              <h3>Choose an Amount</h3>
              <div className="donation-preset-grid">
                <button className="donation-preset-btn" data-amount="5">$5</button>
                <button className="donation-preset-btn" data-amount="10">$10</button>
                <button className="donation-preset-btn active" data-amount="25">$25</button>
                <button className="donation-preset-btn" data-amount="50">$50</button>
                <button className="donation-preset-btn" data-amount="100">$100</button>
              </div>
              <div className="form-group donation-custom-group">
                <label htmlFor="donationCustomAmount">Or enter a custom amount</label>
                <div className="donation-input-wrap">
                  <span className="donation-currency">$</span>
                  <input type="number" id="donationCustomAmount" min={1} step={1} placeholder="Other amount" />
                </div>
              </div>
              <button className="btn btn-primary donation-submit-btn" id="donateSumbitBtn">Donate with Stripe</button>
              <p className="donation-note">Secure checkout via Stripe. DōM is a community space — your support goes directly to maintaining and growing the collective.</p>
            </div>
          </div>
        </section>

        {/* ADMIN DASHBOARD SECTION */}
        <section className="section" id="admin">
          <div className="container">
            <div className="admin-dash-header">
              <h2>Admin Dashboard</h2>
              <div className="admin-space-toggle" id="adminDashSpaceToggle">
                <span id="adminDashSpaceLabel">Space: CLOSED (Auto)</span>
                <button className="btn btn-outline btn-sm" id="adminDashSpaceBtn" onClick={() => (window as any).app?.toggleSpaceStatus()}>Force Open</button>
                <button className="btn btn-outline btn-sm" id="adminDashAutoBtn" onClick={() => (window as any).app?.resetSpaceToAuto()} style={{display: 'none'}}>Reset to Auto</button>
              </div>
            </div>
            <div className="admin-stats-row" id="adminStatsRow">
              <div className="admin-stat-card"><span className="admin-stat-num" id="admStatMembers">—</span><span className="admin-stat-label">Members</span></div>
              <div className="admin-stat-card"><span className="admin-stat-num" id="admStatCheckedIn">—</span><span className="admin-stat-label">In Space Now</span></div>
              <div className="admin-stat-card"><span className="admin-stat-num" id="admStatPending">—</span><span className="admin-stat-label">Pending Requests</span></div>
              <div className="admin-stat-card"><span className="admin-stat-num" id="admStatUnverified">—</span><span className="admin-stat-label">Unverified</span></div>
              <div className="admin-stat-card"><span className="admin-stat-num" id="admStatPaintings">—</span><span className="admin-stat-label">Paintings</span></div>
              <div className="admin-stat-card"><span className="admin-stat-num" id="admStatNeeds">—</span><span className="admin-stat-label">Open Needs</span></div>
            </div>
            <div className="admin-quick-actions">
              <button className="btn btn-primary" onClick={() => (window as any).app?.showAddPaintingModal()}>+ Add Painting</button>
              <button className="btn btn-outline" onClick={() => (window as any).app?.showAdminTab('requests')}>Space Requests</button>
              <button className="btn btn-outline" onClick={() => (window as any).app?.showAdminTab('members')}>Manage Members</button>
              <button className="btn btn-outline" onClick={() => (window as any).app?.showAdminTab('feedback')}>View Feedback</button>
            </div>
            <div className="admin-tabs">
              <button className="admin-tab-btn active" data-tab="checkins" onClick={() => (window as any).app?.showAdminTab('checkins')}>Check-ins</button>
              <button className="admin-tab-btn" data-tab="requests" onClick={() => (window as any).app?.showAdminTab('requests')}>Space Requests</button>
              <button className="admin-tab-btn" data-tab="members" onClick={() => (window as any).app?.showAdminTab('members')}>Members</button>
              <button className="admin-tab-btn" data-tab="gallery" onClick={() => (window as any).app?.showAdminTab('gallery')}>Gallery</button>
              <button className="admin-tab-btn" data-tab="feedback" onClick={() => (window as any).app?.showAdminTab('feedback')}>Feedback</button>
              <button className="admin-tab-btn" data-tab="progress" onClick={() => (window as any).app?.showAdminTab('progress')}>Progress Bar</button>
            </div>
            <div id="adminTab-checkins" className="admin-tab-panel">
              <div className="admin-panel-actions">
                <div className="checkin-stats">
                  <div className="stat-card"><span className="stat-number" id="dashTotalIn">0</span><span className="stat-label">In Space</span></div>
                  <div className="stat-card"><span className="stat-number" id="dashTotalOut">0</span><span className="stat-label">Checked Out</span></div>
                </div>
                <div className="checkin-filters">
                  <button className="filter-btn active" data-filter="all" onClick={() => (window as any).app?.setDashCheckinFilter('all')}>All</button>
                  <button className="filter-btn" data-filter="in" onClick={() => (window as any).app?.setDashCheckinFilter('in')}>In Space</button>
                  <button className="filter-btn" data-filter="out" onClick={() => (window as any).app?.setDashCheckinFilter('out')}>Out</button>
                </div>
              </div>
              <div className="checkin-list" id="dashCheckinList"></div>
              <div className="activity-log" style={{marginTop: '2rem'}}>
                <div className="activity-log-header">
                  <h3>Activity Log</h3>
                  <div className="activity-log-nav">
                    <button className="btn btn-outline btn-sm" id="dashActivityPrev">◀ PREV</button>
                    <span className="activity-log-date" id="dashActivityWeekLabel">—</span>
                    <button className="btn btn-outline btn-sm" id="dashActivityNext">NEXT ▶</button>
                  </div>
                </div>
                <div className="activity-log-summary" id="dashActivitySummary"></div>
                <div className="activity-week-grid" id="dashActivityGrid"></div>
              </div>
            </div>
            <div id="adminTab-requests" className="admin-tab-panel" style={{display: 'none'}}>
              <div id="dashRequestsList"></div>
            </div>
            <div id="adminTab-members" className="admin-tab-panel" style={{display: 'none'}}>
              <div id="dashMembersList"></div>
            </div>
            <div id="adminTab-gallery" className="admin-tab-panel" style={{display: 'none'}}>
              <div className="admin-panel-actions">
                <button className="btn btn-primary" onClick={() => (window as any).app?.showAddPaintingModal()}>+ Add Painting</button>
              </div>
              <div id="dashGalleryList"></div>
            </div>
            <div id="adminTab-feedback" className="admin-tab-panel" style={{display: 'none'}}>
              <div id="dashFeedbackList"></div>
            </div>
            <div id="adminTab-progress" className="admin-tab-panel" style={{display: 'none'}}>
              <div className="admin-progress-panel">
                <h3 style={{margin: '0 0 6px'}}>Monthly Support Bar</h3>
                <p style={{fontSize: '13px', color: '#666', margin: '0 0 20px'}}>Auto-tracked: memberships, ticket sales, donations. Manual boost covers space booking contributions.</p>
                <div className="admin-progress-live">
                  <div className="support-bar-tube" style={{maxWidth: '100%', marginBottom: '8px'}}>
                    <div className="support-bar-liquid" id="adminProgressLiquid"></div>
                    <div className="support-bar-shine"></div>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: 700, marginBottom: '20px'}}>
                    <span id="adminProgressBreakdown">Loading...</span>
                    <span id="adminProgressTotal">—</span>
                  </div>
                </div>
                <div className="admin-progress-boost">
                  <label style={{fontSize: '12px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '8px'}}>Space Booking Contributions (Manual)</label>
                  <div style={{display: 'flex', gap: '8px', alignItems: 'center'}}>
                    <button className="btn btn-outline btn-sm" onClick={() => (window as any).app?.adjustManualBoost(-50)}>− $50</button>
                    <button className="btn btn-outline btn-sm" onClick={() => (window as any).app?.adjustManualBoost(-10)}>− $10</button>
                    <span id="adminBoostValue" style={{fontSize: '18px', fontWeight: 900, minWidth: '70px', textAlign: 'center'}}>$0</span>
                    <button className="btn btn-outline btn-sm" onClick={() => (window as any).app?.adjustManualBoost(10)}>+ $10</button>
                    <button className="btn btn-outline btn-sm" onClick={() => (window as any).app?.adjustManualBoost(50)}>+ $50</button>
                  </div>
                  <div style={{display: 'flex', gap: '8px', marginTop: '10px', alignItems: 'center'}}>
                    <input type="number" id="adminBoostCustomInput" placeholder="Custom amount" min={0} style={{width: '140px', padding: '6px 10px', border: '2px solid #000', fontSize: '13px'}} />
                    <button className="btn btn-primary btn-sm" onClick={() => (window as any).app?.setManualBoost()}>Set</button>
                    <button className="btn btn-outline btn-sm" onClick={() => (window as any).app?.adjustManualBoost(-99999)}>Reset to $0</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="section" id="about">
          <div className="container">
            <div className="about-hero">
              <h2>About DōM</h2>
              <p className="about-tagline">A collective space for creatives to breathe, be, and collaborate.</p>
            </div>
            <div className="about-mission">
              <p>DōM is a community-driven creative collective built on the belief that collaboration fuels innovation. We provide a space — both physical and digital — where artists, designers, musicians, writers, and makers of all kinds can connect, share resources, and bring ideas to life together.</p>
            </div>
            <div className="about-credits">
              <h3>Credits</h3>
              <div className="credits-grid">
                <div className="credit-card">
                  <div className="credit-role">Founder &amp; Catalist</div>
                  <div className="credit-name">Daniel Michel</div>
                </div>
                <div className="credit-card">
                  <div className="credit-role">Website Development</div>
                  <div className="credit-name">Ethan Fountain</div>
                  <div className="credit-contact">ethanfountain03@gmail.com</div>
                </div>
              </div>
            </div>
            <div className="about-feedback">
              <h3>Share Your Feedback</h3>
              <p className="feedback-subtitle">Help us make DōM better. Your feedback is anonymous unless you choose to include your name.</p>
              <form id="feedbackForm">
                <div className="form-group">
                  <label htmlFor="feedbackName">Name (Optional)</label>
                  <input type="text" id="feedbackName" placeholder="Anonymous" />
                </div>
                <div className="form-group">
                  <label htmlFor="feedbackType">Feedback Type</label>
                  <select id="feedbackType">
                    <option value="general">General Feedback</option>
                    <option value="suggestion">Suggestion</option>
                    <option value="bug">Bug Report</option>
                    <option value="praise">Praise</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="feedbackMessage">Message *</label>
                  <textarea id="feedbackMessage" rows={5} required placeholder="Tell us what's on your mind..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit Feedback</button>
              </form>
            </div>
            <div className="about-feedback-admin" id="feedbackAdminSection" style={{display: 'none'}}>
              <h3>User Feedback</h3>
              <div id="feedbackList" className="feedback-list"></div>
            </div>
          </div>
        </section>
      </main>

      {/* MODALS */}

      {/* Auth Modal */}
      <div className="modal" id="authModal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <h3 id="authModalTitle">Login</h3>
          <div>
            <button type="button" className="btn btn-apple-signin" id="appleSignInBtn" style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: '#000', color: '#fff', borderColor: '#000', marginBottom: '8px'}}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.39-1.32 2.76-2.54 4zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              Sign in with Apple
            </button>
            <button type="button" className="btn btn-outline" id="googleSignInBtn" style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'}}>
              <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <path d="M17.6 9.2l-.1-1.8H9v3.4h4.8C13.6 12 13 13 12 13.6v2.2h3a8.8 8.8 0 0 0 2.6-6.6z" fill="#4285F4" fillRule="nonzero"/>
                  <path d="M9 18c2.4 0 4.5-.8 6-2.2l-3-2.2a5.4 5.4 0 0 1-8-2.9H1V13a9 9 0 0 0 8 5z" fill="#34A853" fillRule="nonzero"/>
                  <path d="M4 10.7a5.4 5.4 0 0 1 0-3.4V5H1a9 9 0 0 0 0 8l3-2.3z" fill="#FBBC05" fillRule="nonzero"/>
                  <path d="M9 3.6c1.3 0 2.5.4 3.4 1.3L15 2.3A9 9 0 0 0 1 5l3 2.4a5.4 5.4 0 0 1 5-3.7z" fill="#EA4335" fillRule="nonzero"/>
                </g>
              </svg>
              Sign in with Google
            </button>
            <p className="auth-redirect-notice">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: '-1px'}}>
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              {' '}You&apos;ll be securely redirected to your chosen sign-in provider. Authentication is handled by <a href="https://supabase.com" target="_blank" rel="noopener">Supabase</a>, our trusted infrastructure provider.
            </p>
          </div>
        </div>
      </div>

      {/* Delete Account Confirmation Modal */}
      <div className="modal" id="deleteAccountModal" style={{display: 'none'}}>
        <div className="modal-content" style={{maxWidth: '420px', textAlign: 'center'}}>
          <h3 style={{color: '#c00'}}>Delete Account</h3>
          <p style={{margin: '1rem 0'}}>This will <strong>permanently delete</strong> your account, profile, and all associated data. This cannot be undone.</p>
          <div style={{display: 'flex', gap: '1rem', marginTop: '1.5rem'}}>
            <button type="button" className="btn btn-outline" id="cancelDeleteAccountBtn" style={{flex: 1}}>Cancel</button>
            <button type="button" className="btn" id="confirmDeleteAccountBtn" style={{flex: 1, background: '#c00', color: '#fff', borderColor: '#c00'}}>Yes, Delete My Account</button>
          </div>
        </div>
      </div>

      {/* Onboarding Modal */}
      <div className="modal" id="onboardingModal">
        <div className="modal-content onboarding-content">
          <h3>Welcome to DōM!</h3>
          <p className="onboarding-intro">Let&apos;s set up your profile so other members can discover your talents.</p>
          <form id="onboardingForm">
            <div className="onboarding-step active" data-step="1">
              <h4>Step 1: Basic Information</h4>
              <div className="form-group">
                <label htmlFor="onboardName">Full Name *</label>
                <input type="text" id="onboardName" required />
              </div>
              <div className="form-group">
                <label htmlFor="onboardBio">Tell us about yourself *</label>
                <textarea id="onboardBio" rows={4} required placeholder="What do you create? What are you passionate about?"></textarea>
              </div>
              <button type="button" className="btn btn-primary" onClick={() => (window as any).app?.nextOnboardingStep()}>Next</button>
            </div>
            <div className="onboarding-step" data-step="2">
              <h4>Step 2: Your Skills</h4>
              <div className="form-group">
                <label htmlFor="onboardSkills">Select your skills</label>
                <div className="skills-grid">
                  <label className="skill-checkbox"><input type="checkbox" value="Web Design" /> Web Design</label>
                  <label className="skill-checkbox"><input type="checkbox" value="Graphic Design" /> Graphic Design</label>
                  <label className="skill-checkbox"><input type="checkbox" value="Photography" /> Photography</label>
                  <label className="skill-checkbox"><input type="checkbox" value="Writing" /> Writing</label>
                  <label className="skill-checkbox"><input type="checkbox" value="Video Production" /> Video Production</label>
                  <label className="skill-checkbox"><input type="checkbox" value="Music Production" /> Music Production</label>
                  <label className="skill-checkbox"><input type="checkbox" value="Illustration" /> Illustration</label>
                  <label className="skill-checkbox"><input type="checkbox" value="Marketing" /> Marketing</label>
                  <label className="skill-checkbox"><input type="checkbox" value="3D Modeling" /> 3D Modeling</label>
                  <label className="skill-checkbox"><input type="checkbox" value="Animation" /> Animation</label>
                </div>
                <input type="text" id="onboardOtherSkills" placeholder="Other skills (comma-separated)" />
              </div>
              <div className="onboarding-nav">
                <button type="button" className="btn btn-outline" onClick={() => (window as any).app?.prevOnboardingStep()}>Back</button>
                <button type="button" className="btn btn-primary" onClick={() => (window as any).app?.nextOnboardingStep()}>Next</button>
              </div>
            </div>
            <div className="onboarding-step" data-step="3">
              <h4>Step 3: Your Work (Optional)</h4>
              <p style={{marginBottom: '1.5rem', fontSize: '0.9rem'}}>Add links to showcase your work - you can skip this and add them later!</p>
              <div className="form-group">
                <label htmlFor="onboardPortfolio">Portfolio URL</label>
                <input type="url" id="onboardPortfolio" placeholder="https://yourportfolio.com" />
              </div>
              <div className="form-group">
                <label htmlFor="onboardWebsite">Personal Website</label>
                <input type="url" id="onboardWebsite" placeholder="https://yourwebsite.com" />
              </div>
              <div className="form-group">
                <label htmlFor="onboardSocial">Social Media</label>
                <input type="text" id="onboardSocial" placeholder="@username or profile link" />
              </div>
              <div className="onboarding-nav">
                <button type="button" className="btn btn-outline" onClick={() => (window as any).app?.prevOnboardingStep()}>Back</button>
                <button type="submit" className="btn btn-primary">Complete Profile</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Need Modal */}
      <div className="modal" id="needModal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <h3>Post a Need</h3>
          <form id="needForm">
            <div className="form-group">
              <label htmlFor="needTitle">Title *</label>
              <input type="text" id="needTitle" required placeholder="What do you need help with?" />
            </div>
            <div className="form-group">
              <label htmlFor="needDescription">Description *</label>
              <textarea id="needDescription" rows={4} required placeholder="Describe your project and requirements..."></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="needSkills">Required Skills (comma-separated)</label>
              <input type="text" id="needSkills" placeholder="e.g., Web Design, Photography" />
            </div>
            <div className="form-group">
              <label htmlFor="needBudget">Budget Range</label>
              <select id="needBudget">
                <option value="">Select budget range</option>
                <option value="Under $500">Under $500</option>
                <option value="$500 - $1,500">$500 - $1,500</option>
                <option value="$1,500 - $5,000">$1,500 - $5,000</option>
                <option value="$5,000+">$5,000+</option>
                <option value="Collaboration/Trade">Collaboration/Trade</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="needDeadline">Deadline (Optional)</label>
              <input type="date" id="needDeadline" />
            </div>
            <div className="form-group">
              <label>Flyer / Image (optional)</label>
              <p style={{fontSize: '0.78rem', color: '#666', margin: '0 0 0.5rem'}}>Upload your own flyer or artwork — it replaces the default card on the board.</p>
              <input type="file" id="needFlyerFile" accept="image/*" />
              <div id="needFlyerPreview" style={{marginTop: '0.5rem'}}></div>
              <p id="needFlyerStatus" style={{fontSize: '0.82rem', fontWeight: 700, marginTop: '0.25rem'}}></p>
              <input type="hidden" id="needFlyerUrl" />
            </div>
            <button type="submit" className="btn btn-primary">Post Need</button>
          </form>
        </div>
      </div>

      {/* Event Modal */}
      <div className="modal" id="eventModal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <h3>Create Event</h3>
          <form id="eventForm">
            <div className="form-group">
              <label htmlFor="eventTitle">Event Title *</label>
              <input type="text" id="eventTitle" required />
            </div>
            <div className="form-group">
              <label htmlFor="eventDescription">Description</label>
              <textarea id="eventDescription" rows={3}></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="eventDate">Date *</label>
              <input type="date" id="eventDate" required />
            </div>
            <div className="form-group">
              <label htmlFor="eventTime">Time</label>
              <input type="time" id="eventTime" />
            </div>
            <div className="form-group">
              <label htmlFor="eventLocation">Location</label>
              <input type="text" id="eventLocation" placeholder="Online or physical address" />
            </div>
            <div className="form-group">
              <label htmlFor="eventType">Event Type</label>
              <select id="eventType">
                <option value="Workshop">Workshop</option>
                <option value="Meetup">Meetup</option>
                <option value="Exhibition">Exhibition</option>
                <option value="Networking">Networking</option>
                <option value="Collaboration">Collaboration Session</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">Create Event</button>
          </form>
        </div>
      </div>

      {/* Project Modal */}
      <div className="modal" id="projectModal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <h3>Add Portfolio Project</h3>
          <form id="projectForm">
            <div className="form-group">
              <label htmlFor="projectTitle">Project Title *</label>
              <input type="text" id="projectTitle" required />
            </div>
            <div className="form-group">
              <label htmlFor="projectDescription">Description</label>
              <textarea id="projectDescription" rows={3}></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="projectImageFile">Project Image</label>
              <input type="file" id="projectImageFile" accept="image/*" style={{padding: '1rem', border: '3px solid #000', background: '#fff', fontWeight: 700, cursor: 'pointer', width: '100%'}} />
              <input type="hidden" id="projectImage" />
              <div id="projectImagePreview" className="image-preview" style={{marginTop: '1rem'}}></div>
              <p id="projectImageUploadStatus" style={{fontSize: '0.9rem', marginTop: '0.5rem', fontWeight: 700}}></p>
            </div>
            <div className="form-group">
              <label htmlFor="projectLink">Project Link</label>
              <input type="text" id="projectLink" placeholder="https://example.com/project" />
            </div>
            <button type="submit" className="btn btn-primary">Add Project</button>
          </form>
        </div>
      </div>

      {/* Member Modal */}
      <div className="modal" id="memberModal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <div id="memberModalContent"></div>
        </div>
      </div>

      {/* Contact Modal */}
      <div className="modal" id="contactModal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <h3>Send Message</h3>
          <form id="contactForm">
            <div className="form-group">
              <label htmlFor="messageSubject">Subject</label>
              <input type="text" id="messageSubject" required />
            </div>
            <div className="form-group">
              <label htmlFor="messageContent">Message</label>
              <textarea id="messageContent" rows={6} required placeholder="Write your message..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>

      {/* Gallery Viewer Modal */}
      <div className="modal" id="galleryModal">
        <div className="modal-content" style={{maxWidth: '90%', maxHeight: '90vh', padding: '1rem'}}>
          <span className="close">&times;</span>
          <div id="galleryViewer" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
            <img id="galleryImage" src="" alt="Gallery" style={{maxWidth: '100%', maxHeight: '70vh', objectFit: 'contain', border: '3px solid #000', marginBottom: '1rem'}} />
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <button className="btn btn-outline" onClick={() => (window as any).app?.prevGalleryImage()}>Previous</button>
              <span id="galleryCounter" style={{fontWeight: 900}}>1 / 1</span>
              <button className="btn btn-outline" onClick={() => (window as any).app?.nextGalleryImage()}>Next</button>
            </div>
          </div>
        </div>
      </div>

      {/* Add/Edit Painting Modal */}
      <div className="modal" id="paintingModal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <h3 id="paintingModalTitle">Add Painting</h3>
          <form id="paintingForm">
            <div className="form-group">
              <label htmlFor="paintingTitle">Title *</label>
              <input type="text" id="paintingTitle" required />
            </div>
            <div className="form-group">
              <label htmlFor="paintingArtist">Artist Name *</label>
              <input type="text" id="paintingArtist" required />
            </div>
            <div className="form-group">
              <label htmlFor="paintingCredit">Artist Credit/Bio</label>
              <textarea id="paintingCredit" rows={3} placeholder="Optional artist information or credit line"></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="paintingDescription">Description</label>
              <textarea id="paintingDescription" rows={4} placeholder="Describe the artwork..."></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="paintingSaleStatus">Listing Status *</label>
              <select id="paintingSaleStatus">
                <option value="for_sale">For Sale</option>
                <option value="for_trade">For Trade</option>
                <option value="not_for_sale">Not for Sale</option>
              </select>
            </div>
            <div className="form-group" id="paintingPriceGroup">
              <label htmlFor="paintingPrice">Price (USD) *</label>
              <input type="number" id="paintingPrice" min={0} step={0.01} placeholder="0.00" />
            </div>
            <div className="form-group">
              <label htmlFor="paintingDateCreated">Date Created</label>
              <input type="date" id="paintingDateCreated" />
            </div>
            <div className="form-group">
              <label htmlFor="paintingDateAdopted">Date Adopted</label>
              <input type="date" id="paintingDateAdopted" />
            </div>
            <div className="form-group">
              <label htmlFor="paintingImageFile">Painting Image * (Choose from gallery or take photo)</label>
              <input type="file" id="paintingImageFile" accept="image/*" required style={{padding: '1rem', border: '3px solid #000', background: '#fff', fontWeight: 700, cursor: 'pointer', width: '100%'}} />
              <input type="hidden" id="paintingImage" />
              <div id="paintingImagePreview" className="image-preview" style={{marginTop: '1rem'}}></div>
              <p id="paintingImageUploadStatus" style={{fontSize: '0.9rem', marginTop: '0.5rem', fontWeight: 700}}></p>
            </div>
            <button type="submit" className="btn btn-primary">Add Painting</button>
          </form>
        </div>
      </div>

      {/* Painting Detail Modal */}
      <div className="modal painting-detail-modal" id="paintingDetailModal">
        <div className="modal-content">
          <div className="painting-detail-layout">
            <div className="painting-detail-image">
              <button className="painting-detail-close" onClick={() => (window as any).app?.closePaintingDetail()}>&times;</button>
              <img id="paintingDetailImage" src="" alt="" />
              <div id="paintingDetailSoldOverlay" className="painting-sold-overlay" style={{display: 'none'}}>SOLD</div>
            </div>
            <div className="painting-detail-info">
              <div>
                <h3 className="painting-title" id="paintingDetailTitle"></h3>
                <p className="painting-artist" id="paintingDetailArtist"></p>
              </div>
              <p className="painting-description" id="paintingDetailDescription"></p>
              <div className="painting-credit" id="paintingDetailCredit" style={{display: 'none'}}></div>
              <div className="painting-price" id="paintingDetailPrice"></div>
              <div className="painting-detail-actions" id="paintingDetailActions"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Event Detail Modal */}
      <div className="modal" id="eventDetailModal">
        <div className="modal-content event-detail-modal-content">
          <button className="painting-detail-close" onClick={() => (window as any).app?.closeEventDetail()}>&times;</button>
          <div id="eventDetailHero" className="event-detail-hero" style={{display: 'none'}}>
            <img id="eventDetailHeroImg" src="" alt="" />
          </div>
          <div className="event-detail-body">
            <div className="event-detail-top-row">
              <div id="eventDetailPrivateBadge" className="event-detail-private-badge" style={{display: 'none'}}>PRIVATE</div>
              <button className="event-detail-share-btn" id="eventDetailShareBtn" onClick={() => (window as any).app?.copyEventLink()} title="Copy shareable link">&#128279; Share</button>
            </div>
            <h2 id="eventDetailTitle" className="event-detail-title"></h2>
            <div className="event-detail-meta">
              <div id="eventDetailDate" className="event-detail-meta-item"></div>
              <div id="eventDetailTime" className="event-detail-meta-item" style={{display: 'none'}}></div>
              <div id="eventDetailLocation" className="event-detail-meta-item" style={{display: 'none'}}></div>
            </div>
            <div id="eventDetailDescription" className="event-detail-description"></div>
            <div id="eventDetailExtraInfo" className="event-detail-extra-info" style={{display: 'none'}}></div>
            <div id="eventDetailAdminEdit" className="event-detail-admin-edit" style={{display: 'none'}}>
              <h4>Edit Event Info</h4>
              <div className="form-group">
                <label>Extra Info (shown to visitors)</label>
                <textarea id="eventDetailExtraInput" rows={4} placeholder="Add event details, links, instructions..."></textarea>
              </div>
              <div className="form-group">
                <label>Event Image (optional)</label>
                <input type="file" id="eventDetailImageFile" accept="image/*" />
                <div id="eventDetailImagePreview" style={{marginTop: '0.75rem'}}></div>
                <p id="eventDetailImageStatus" style={{fontSize: '0.85rem', fontWeight: 700, marginTop: '0.4rem'}}></p>
                <input type="hidden" id="eventDetailImageInput" />
              </div>
              <div className="form-group event-detail-ticketing-row">
                <label className="event-detail-toggle-label">
                  <input type="checkbox" id="eventDetailTicketsEnabled" />
                  <span>Enable Ticketing</span>
                </label>
                <div id="eventDetailTicketPriceGroup" style={{display: 'none', marginTop: '0.75rem'}}>
                  <label>Ticket Price (USD)</label>
                  <input type="number" id="eventDetailTicketPrice" min={0.01} step={0.01} placeholder="0.00" style={{width: '100%', border: '3px solid #000', padding: '0.75rem', fontSize: '0.9rem'}} />
                </div>
              </div>
              <div className="form-group event-detail-ticketing-row">
                <label className="event-detail-toggle-label">
                  <input type="checkbox" id="eventDetailSpecialRsvpEnabled" />
                  <span>Special RSVP (collect name + group)</span>
                </label>
              </div>
              <button className="btn btn-primary" onClick={() => (window as any).app?.saveEventDetail()}>Save</button>
            </div>
            <div id="eventDetailActions" className="event-detail-bottom-actions"></div>
          </div>
        </div>
      </div>

      {/* Need Detail Modal */}
      <div className="modal" id="needDetailModal">
        <div className="modal-content need-detail-modal-content">
          <button className="painting-detail-close" onClick={() => (window as any).app?.closeNeedDetail()}>&times;</button>
          <div className="need-detail-strip" id="needDetailStrip">MISSION</div>
          <div className="need-detail-body">
            <h2 className="need-detail-title" id="needDetailTitle"></h2>
            <div className="need-detail-meta" id="needDetailMeta"></div>
            <div id="needDetailBudget" className="need-detail-budget" style={{display: 'none'}}></div>
            <p id="needDetailDesc" className="need-detail-desc"></p>
            <div id="needDetailDeadline" className="need-detail-deadline" style={{display: 'none'}}></div>
            <div id="needDetailSkills" className="need-detail-skills"></div>
            <div id="needDetailMatches"></div>
            <div id="needDetailActions" className="need-detail-actions"></div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{background: '#000', color: '#555', textAlign: 'center', padding: '16px', fontSize: '12px', fontFamily: "'Arial', sans-serif"}}>
        &copy; 2026 Dom Collective &nbsp;&mdash;&nbsp;
        <a href="/privacy-policy" style={{color: '#FFE500', textDecoration: 'none'}}>Privacy Policy</a>
      </footer>

      {/* Mobile Debug Console (hidden) */}
      <div id="mobileDebug" style={{position: 'fixed', bottom: 0, left: 0, right: 0, height: '150px', background: '#000', color: '#0f0', fontFamily: 'monospace', fontSize: '10px', overflowY: 'auto', zIndex: 999, padding: '8px', display: 'none', borderTop: '3px solid #0f0'}}></div>
    </>
  );
}
