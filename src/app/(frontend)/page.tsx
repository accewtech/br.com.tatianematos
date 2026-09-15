'use client'

import { useState } from 'react'
import {
  Activity,
  ArrowRight,
  BarChart3,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  Clock3,
  Menu,
  MessageSquare,
  Play,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
  X,
  Zap,
} from 'lucide-react'
import './landing.css'

const features = [
  { icon: ClipboardList, title: 'Prontuário inteligente', description: 'Registros completos e organizados para decisões clínicas mais seguras.' },
  { icon: CalendarDays, title: 'Agenda sem conflitos', description: 'Visualize sessões, profissionais e salas em um só lugar.' },
  { icon: BarChart3, title: 'Gestão que dá clareza', description: 'Indicadores em tempo real para acompanhar a saúde da sua operação.' },
  { icon: MessageSquare, title: 'Comunicação fluida', description: 'Conecte equipe, pacientes e responsáveis com mais proximidade.' },
]

const plans = [
  { name: 'Essencial', monthly: 149, description: 'Para profissionais que estão começando a organizar sua rotina.', features: ['Até 2 profissionais', 'Agenda e prontuário', 'Suporte por e-mail'] },
  { name: 'Clínica', monthly: 349, description: 'Para clínicas que querem crescer com processos mais inteligentes.', features: ['Até 10 profissionais', 'Todos os recursos', 'Relatórios avançados'], featured: true },
  { name: 'Rede', monthly: 699, description: 'Para operações maiores que precisam de escala e controle.', features: ['Profissionais ilimitados', 'Multiunidades', 'Suporte prioritário'] },
]

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [annual, setAnnual] = useState(true)

  return (
    <div className="rehabhub-site">
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="RehabHub início"><span className="brand-mark"><Activity size={18} strokeWidth={2.5} /></span><span>Rehab<span>Hub</span></span></a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navegação principal">
          <a href="#recursos" onClick={() => setMenuOpen(false)}>Recursos</a><a href="#como-funciona" onClick={() => setMenuOpen(false)}>Como funciona</a><a href="#planos" onClick={() => setMenuOpen(false)}>Planos</a><a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre nós</a>
        </nav>
        <a className="button button-ghost header-cta" href="/admin">Acessar painel <ArrowRight size={15} /></a>
      </header>

      <main>
        <section className="hero section-shell" id="inicio">
          <div className="hero-copy">
            <div className="eyebrow"><Sparkles size={14} /> Gestão que transforma cuidado</div>
            <h1>Mais tempo para <em>cuidar.</em><br />Mais clareza para <strong>crescer.</strong></h1>
            <p className="hero-description">O RehabHub conecta a gestão da sua clínica à evolução de cada paciente. Simples para sua equipe, poderoso para o seu negócio.</p>
            <div className="hero-actions"><a className="button button-primary" href="/admin">Começar agora <ArrowRight size={16} /></a><a className="button button-link" href="#como-funciona"><span className="play-icon"><Play size={12} fill="currentColor" /></span> Veja como funciona</a></div>
            <div className="trust-note"><span className="trust-avatars"><i>LM</i><i>RC</i><i>AS</i></span><span>Já usado por <b>+500 profissionais</b><br />que cuidam melhor todos os dias.</span></div>
          </div>
          <div className="hero-visual" aria-label="Prévia do painel RehabHub">
            <div className="glow glow-one" /><div className="glow glow-two" />
            <div className="dashboard-card">
              <div className="dashboard-top"><div className="mini-brand"><span className="brand-mark small"><Activity size={11} /></span> RehabHub</div><div className="dashboard-actions"><span className="search-dot" /><span className="avatar">MC</span></div></div>
              <div className="dashboard-body"><aside><span className="side-active"><BarChart3 size={13} /> Visão geral</span><span><CalendarDays size={13} /> Agenda</span><span><Users size={13} /> Pacientes</span><span><ClipboardList size={13} /> Prontuários</span><span><MessageSquare size={13} /> Mensagens</span></aside>
                <div className="dashboard-main"><div className="dashboard-heading"><div><small>SEGUNDA-FEIRA, 15 DE SETEMBRO</small><h3>Bom dia, Mariana <span>✦</span></h3></div><button>+ Nova sessão</button></div><div className="stat-grid"><div><small>Pacientes ativos</small><strong>248</strong><span className="positive">↗ 12,4%</span></div><div><small>Sessões este mês</small><strong>1.284</strong><span className="positive">↗ 8,7%</span></div><div><small>Taxa de retorno</small><strong>92<span>%</span></strong><span className="positive">↗ 4,2%</span></div></div><div className="chart-card"><div className="chart-heading"><b>Evolução da clínica</b><select defaultValue="6"><option value="6">Últimos 6 meses</option></select></div><div className="chart"><div className="chart-line" /><div className="chart-grid" /><div className="chart-labels"><span>Abr</span><span>Mai</span><span>Jun</span><span>Jul</span><span>Ago</span><span>Set</span></div></div></div></div>
              </div>
            </div>
            <div className="floating-card floating-session"><span className="floating-icon"><Clock3 size={16} /></span><div><small>Próxima sessão</small><b>Hoje, 14:30</b><span>Mariana Costa · Fisioterapia</span></div><ChevronRight size={15} /></div>
            <div className="floating-card floating-result"><span className="result-ring"><Check size={14} /></span><div><small>Meta mensal</small><b>87% concluída</b><div className="progress"><i /></div></div></div>
          </div>
        </section>

        <section className="metrics"><div><strong>+500</strong><span>clínicas conectadas</span></div><div><strong>98,7%</strong><span>de satisfação</span></div><div><strong>+1M</strong><span>sessões gerenciadas</span></div><div><strong>24/7</strong><span>seu cuidado, sempre</span></div></section>

        <section className="feature-section section-shell" id="recursos"><div className="section-intro"><div className="eyebrow">Tudo em um só lugar</div><h2>A tecnologia que entende<br /><span>o seu cuidado.</span></h2><p>Menos planilhas, mais tempo para o que realmente importa: a evolução dos seus pacientes.</p></div><div className="feature-grid">{features.map(({ icon: Icon, title, description }) => <article className="feature-card" key={title}><span className="feature-icon"><Icon size={20} /></span><h3>{title}</h3><p>{description}</p><a href="#como-funciona">Saiba mais <ArrowRight size={14} /></a></article>)}</div></section>

        <section className="workflow section-shell" id="como-funciona"><div className="workflow-visual"><div className="circle-orbit orbit-one" /><div className="circle-orbit orbit-two" /><div className="workflow-center"><Stethoscope size={33} /><span>Seu cuidado<br /><b>em evolução</b></span></div><span className="orbit-node node-one"><Users size={18} /></span><span className="orbit-node node-two"><BarChart3 size={18} /></span><span className="orbit-node node-three"><ShieldCheck size={18} /></span></div><div className="workflow-copy"><div className="eyebrow">Feito para você</div><h2>Da primeira sessão<br />ao <span>próximo nível.</span></h2><p>O RehabHub acompanha cada etapa da sua jornada, para que você possa tomar decisões melhores e oferecer uma experiência ainda mais humana.</p><ul><li><span><Check size={14} /></span>Organize sua rotina em minutos</li><li><span><Check size={14} /></span>Acompanhe o progresso de perto</li><li><span><Check size={14} /></span>Cresça com dados confiáveis</li></ul><a className="button button-secondary" href="/admin">Conheça o RehabHub <ArrowRight size={16} /></a></div></section>

        <section className="pricing section-shell" id="planos"><div className="section-intro centered"><div className="eyebrow">Planos transparentes</div><h2>Escolha o ritmo do seu <span>crescimento.</span></h2><p>Comece simples. Evolua quando estiver pronto.</p><div className="billing-toggle"><button className={!annual ? 'active' : ''} onClick={() => setAnnual(false)}>Mensal</button><button className={annual ? 'active' : ''} onClick={() => setAnnual(true)}>Anual <b>-20%</b></button></div></div><div className="pricing-grid">{plans.map((plan) => <article className={plan.featured ? 'price-card featured' : 'price-card'} key={plan.name}>{plan.featured && <span className="popular">Mais escolhido</span>}<h3>{plan.name}</h3><p>{plan.description}</p><div className="price"><sup>R$</sup><strong>{annual ? Math.round(plan.monthly * .8) : plan.monthly}</strong><span>/mês</span></div><a className={plan.featured ? 'button button-primary' : 'button button-outline'} href="/admin">Começar agora <ArrowRight size={15} /></a><hr /><small>Inclui:</small><ul>{plan.features.map((feature) => <li key={feature}><Check size={14} />{feature}</li>)}</ul></article>)}</div></section>

        <section className="final-cta section-shell" id="sobre"><div className="cta-glow" /><div className="eyebrow">O próximo passo é seu</div><h2>Cuide do seu negócio<br /><span>como você cuida dos seus pacientes.</span></h2><p>Comece hoje a transformar sua gestão. O futuro da sua clínica agradece.</p><a className="button button-light" href="/admin">Começar gratuitamente <ArrowRight size={16} /></a></section>
      </main>
      <footer className="site-footer section-shell"><div className="footer-top"><a className="brand" href="#inicio"><span className="brand-mark"><Activity size={18} strokeWidth={2.5} /></span><span>Rehab<span>Hub</span></span></a><div className="footer-links"><a href="#recursos">Recursos</a><a href="#planos">Planos</a><a href="#sobre">Sobre nós</a><a href="#inicio">Privacidade</a></div><div className="socials"><a href="#inicio" aria-label="Instagram">ig</a><a href="#inicio" aria-label="LinkedIn">in</a><a href="#inicio" aria-label="Facebook">f</a></div></div><div className="footer-bottom"><span>© 2025 RehabHub. Feito para quem faz a diferença.</span><span className="lgpd"><ShieldCheck size={13} /> Seus dados protegidos com segurança.</span></div></footer>
    </div>
  )
}
