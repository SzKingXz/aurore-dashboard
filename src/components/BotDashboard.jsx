import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Settings, Users, Shield, MessageSquare, DollarSign, Gamepad2, Bell, Activity, BarChart3, Command, MessageCircle, Music, ChevronDown, ChevronRight, LogOut, User, Zap, X, ArrowRight, Server, Link as LinkIcon } from 'lucide-react';

const API_URL = 'http://localhost:3001/api';

const BotDashboard = () => {
  const [view, setView] = useState('landing');
  const [activeSection, setActiveSection] = useState('overview');
  const [selectedServer, setSelectedServer] = useState(null);
  const [servers, setServers] = useState([]);
  const [serverData, setServerData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [expandedMenu, setExpandedMenu] = useState({});
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [particles, setParticles] = useState([]);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [expandedRoleCategories, setExpandedRoleCategories] = useState({
    admin: false,
    dashboardAccess: false,
    other: true
  });

  const [randomPhrase] = useState([
    "¡Gestiona tu servidor de Discord como un profesional! 🚀",
    "El poder de la moderación en tus manos ⚡",
    "Controla, configura y conquista tu comunidad 🎯",
    "Dashboard inteligente para administradores inteligentes 🧠",
    "Tu servidor, tus reglas, nuestra tecnología 💎"
  ][Math.floor(Math.random() * 5)]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    if (view === 'dashboard' && selectedServer) {
      const interval = setInterval(() => {
        loadServerData(selectedServer, true);
      }, 30000);
      return () => clearInterval(interval);
    }
  }, [view, selectedServer]);

  const handleDiscordAuth = async () => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsAuthenticated(true);
      setUserInfo({
        id: '123456789',
        username: 'Admin',
        discriminator: '0001',
        avatar: null
      });
      const response = await fetch(`${API_URL}/user/servers`);
      const data = await response.json();
      setServers(data.servers || []);
      setView('servers');
    } catch (error) {
      console.error('Error en autenticación:', error);
      alert('Error al conectar con Discord');
    } finally {
      setLoading(false);
    }
  };

  const loadServerData = async (serverId, silent = false) => {
    if (!silent) setLoading(true);
    try {
      const response = await fetch(`${API_URL}/server/${serverId}`);
      const data = await response.json();
      setServerData(data);
      setSelectedServer(serverId);
      if (!silent) {
        setView('dashboard');
        setActiveSection('overview');
      }
    } catch (error) {
      console.error('Error cargando datos del servidor:', error);
      if (!silent) alert('Error al cargar datos del servidor');
    } finally {
      if (!silent) setLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserInfo(null);
    setServers([]);
    setServerData(null);
    setView('landing');
    setShowUserMenu(false);
  };

  const categorizeRoles = (roles) => {
    if (!roles) return { admin: [], dashboardAccess: [], other: [] };
    const adminRoles = roles.filter(r => 
      r.name.toLowerCase().includes('admin') || 
      r.name.toLowerCase().includes('owner') ||
      r.name.toLowerCase().includes('moderator') ||
      r.name.toLowerCase().includes('mod')
    );
    const dashboardRoles = roles.filter(r => 
      r.name.toLowerCase().includes('dashboard') ||
      r.name.toLowerCase().includes('manager') ||
      r.name.toLowerCase().includes('staff')
    );
    const otherRoles = roles.filter(r => 
      !adminRoles.includes(r) && !dashboardRoles.includes(r)
    );
    return { admin: adminRoles, dashboardAccess: dashboardRoles, other: otherRoles };
  };

  const menuItems = [
    { id: 'overview', label: 'Dashboard', icon: BarChart3, submenu: [] },
    { id: 'moderation', label: 'Moderation', icon: Shield, submenu: [
        { id: 'mod-actions', label: 'Actions' },
        { id: 'mod-automod', label: 'Auto-Mod' },
      ] },
    { id: 'roles', label: 'Roles', icon: Users, submenu: [] },
    { id: 'messages', label: 'Messages', icon: MessageSquare, submenu: [] },
    { id: 'settings', label: 'Settings', icon: Settings, submenu: [] }
  ];

  const toggleMenu = (id) => {
    setExpandedMenu(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleRoleCategory = (category) => {
    setExpandedRoleCategories(prev => ({ ...prev, [category]: !prev[category] }));
  };

  const renderContent = () => {
    if (!serverData) return null;

    if (activeSection === 'overview') {
      const roleCategories = categorizeRoles(serverData.roles?.list || []);
      
      return (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Users, label: 'Miembros', value: serverData.members.total, color: 'cyan' },
              { icon: Activity, label: 'En línea', value: serverData.members.online, color: 'purple' },
              { icon: MessageCircle, label: 'Canales', value: serverData.channels.total, color: 'cyan' },
              { icon: Command, label: `${serverData.bot.ping}ms`, value: `${Math.floor(serverData.bot.uptime / 3600)}h`, color: 'purple', sublabel: 'Bot Uptime' }
            ].map((stat, idx) => (
              <div key={idx} className={`bg-gray-800 rounded-lg p-6 border border-${stat.color}-500/20 hover:border-${stat.color}-500/50 transition-all hover:scale-105`}>
                <div className="flex items-center justify-between mb-3">
                  <stat.icon className={`w-6 h-6 text-${stat.color}-400`} />
                  <span className={`text-xs text-${stat.color}-400 font-mono uppercase`}>{stat.label}</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-xs font-medium uppercase">{stat.sublabel || stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-gray-800 rounded-lg p-6 border border-cyan-500/10">
              <h3 className="text-sm font-bold text-white mb-4 uppercase flex items-center gap-2">
                <span className="text-cyan-400">▸</span> Actividad del Servidor (Últimas 24h)
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={serverData.stats.messageStats}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="time" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #00E5FF', borderRadius: '8px' }} />
                  <Legend />
                  <Line type="monotone" dataKey="mensajes" stroke="#00E5FF" strokeWidth={3} name="Mensajes" />
                  <Line type="monotone" dataKey="comandos" stroke="#7C6CFF" strokeWidth={3} name="Comandos" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-purple-500/10 max-h-[400px] overflow-y-auto">
              <h3 className="text-sm font-bold text-white mb-4 uppercase flex items-center gap-2">
                <span className="text-purple-400">›</span> Top Usuarios (Más Mensajes)
              </h3>
              <div className="space-y-3">
                {serverData.stats.topUsers.slice(0, 10).map((user, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-gray-900 rounded-lg hover:bg-gray-900/80 transition-all">
                    <span className="text-lg font-bold text-cyan-400">{idx + 1}</span>
                    {user.avatar ? (
                      <img src={user.avatar} alt={user.username} className="w-10 h-10 rounded-full" />
                    ) : (
                      <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                        {user.username?.charAt(0) || '?'}
                      </div>
                    )}
                    <div className="flex-1">
                      <p className="text-sm font-bold text-white">{user.username}</p>
                      <p className="text-xs text-gray-400">{user.messages} mensajes • Nivel {user.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg p-6 border border-cyan-500/10">
              <h3 className="text-sm font-bold text-white mb-4 uppercase flex items-center gap-2">
                <span className="text-cyan-400">◉</span> Canales
              </h3>
              <div className="space-y-3">
                {[
                  { label: '💬 Texto', value: serverData.channels.text, color: 'cyan' },
                  { label: '🔊 Voz', value: serverData.channels.voice, color: 'purple' },
                  { label: '📁 Categorías', value: serverData.channels.categories, color: 'cyan' }
                ].map((ch, idx) => (
                  <div key={idx} className="flex justify-between items-center p-3 bg-gray-900 rounded-lg">
                    <span className="text-gray-300 font-mono text-sm">{ch.label}</span>
                    <span className={`text-${ch.color}-400 font-bold`}>{ch.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-purple-500/10">
              <h3 className="text-sm font-bold text-white mb-4 uppercase flex items-center gap-2">
                <span className="text-purple-400">›</span> Roles por Categoría
              </h3>
              
              {[
                { key: 'admin', label: 'Roles con Admin', icon: Shield, color: 'red', roles: roleCategories.admin },
                { key: 'dashboardAccess', label: 'Acceso a Dashboard', icon: Settings, color: 'cyan', roles: roleCategories.dashboardAccess },
                { key: 'other', label: 'Otros Roles', icon: Users, color: 'purple', roles: roleCategories.other }
              ].map((category) => (
                <div key={category.key} className="mb-3">
                  <button
                    onClick={() => toggleRoleCategory(category.key)}
                    className={`w-full flex items-center justify-between p-3 bg-${category.color}-500/10 border border-${category.color}-500/30 rounded-lg hover:bg-${category.color}-500/20 transition-all`}
                  >
                    <span className={`text-${category.color}-400 font-mono text-sm flex items-center gap-2`}>
                      <category.icon className="w-4 h-4" />
                      {category.label} ({category.roles.length})
                    </span>
                    {expandedRoleCategories[category.key] ? <ChevronDown className={`w-4 h-4 text-${category.color}-400`} /> : <ChevronRight className={`w-4 h-4 text-${category.color}-400`} />}
                  </button>
                  {expandedRoleCategories[category.key] && (
                    <div className="mt-2 space-y-1 max-h-40 overflow-y-auto">
                      {category.roles.slice(0, 10).map((role, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-2 bg-gray-900 rounded-lg text-xs">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: role.color }}></div>
                          <span className="flex-1 text-gray-300">{role.name}</span>
                          <span className={`text-${category.color}-400 font-bold`}>{role.members}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-gray-800 rounded-lg p-6 border border-cyan-500/10">
        <h2 className="text-lg font-bold text-white mb-4 uppercase">{menuItems.find(m => m.id === activeSection)?.label}</h2>
        <p className="text-gray-400 font-mono text-sm">› Módulo en desarrollo...</p>
      </div>
    );
  };

  // LANDING PAGE
  if (view === 'landing') {
    return (
      <div className="min-h-screen bg-gray-900 relative overflow-hidden flex items-center justify-center">
        <div className="fixed inset-0 pointer-events-none">
          {particles.map((particle) => (
            <div key={particle.id} className="absolute rounded-full bg-cyan-500/20" style={{ left: `${particle.x}%`, top: `${particle.y}%`, width: `${particle.size}px`, height: `${particle.size}px`, animation: `float ${particle.duration}s infinite ease-in-out ${particle.delay}s` }} />
          ))}
        </div>
        <div className="fixed inset-0 pointer-events-none opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#00E5FF 1px, transparent 1px), linear-gradient(90deg, #00E5FF 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        </div>
        <div className="relative z-10 text-center max-w-4xl px-6">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-cyan-500 to-purple-500 rounded-3xl flex items-center justify-center shadow-2xl mb-8 animate-pulse">
            <Zap className="w-16 h-16 text-gray-900" />
          </div>
          <h1 className="text-6xl font-bold text-white tracking-[0.3em] mb-4">A U R Ø R E</h1>
          <p className="text-2xl text-cyan-400 font-mono tracking-wider mb-8">{randomPhrase}</p>
          <button onClick={handleDiscordAuth} disabled={loading} className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-lg shadow-2xl hover:scale-105 transition-all flex items-center gap-3 mx-auto disabled:opacity-50">
            {loading ? <span>Conectando...</span> : <><Server className="w-5 h-5" /><span>CONECTAR CON DISCORD</span><ArrowRight className="w-5 h-5" /></>}
          </button>
          <p className="mt-8 text-gray-500 text-sm font-mono">⚠️ Debes conectar tu cuenta de Discord para acceder</p>
        </div>
        <style>{`@keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }`}</style>
      </div>
    );
  }

  // SERVER SELECTION  
  if (view === 'servers') {
    return (
      <div className="min-h-screen bg-gray-900 relative overflow-hidden">
        <div className="fixed inset-0 pointer-events-none">{particles.map((p) => (<div key={p.id} className="absolute rounded-full bg-cyan-500/20" style={{ left: `${p.x}%`, top: `${p.y}%`, width: `${p.size}px`, height: `${p.size}px`, animation: `float ${p.duration}s infinite ease-in-out ${p.delay}s` }} />))}</div>
        <div className="fixed inset-0 pointer-events-none opacity-10"><div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#00E5FF 1px, transparent 1px), linear-gradient(90deg, #00E5FF 1px, transparent 1px)', backgroundSize: '50px 50px' }} /></div>
        <div className="relative z-10 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div><h1 className="text-4xl font-bold text-white">TUS SERVIDORES</h1><p className="text-cyan-400 font-mono text-sm">Selecciona un servidor</p></div>
              <button onClick={handleLogout} className="px-6 py-3 bg-gray-800 border border-red-500/30 text-red-400 hover:border-red-500/50 rounded-lg flex items-center gap-2"><LogOut className="w-4 h-4" />Cerrar Sesión</button>
            </div>
            {loading ? (<div className="text-center py-20"><div className="w-16 h-16 mx-auto mb-4 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div><p className="text-gray-400 font-mono">Cargando...</p></div>) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {servers.map((s) => (
                  <div key={s.id} onClick={() => loadServerData(s.id)} className="bg-gray-800 border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/50 hover:scale-105 transition-all cursor-pointer group">
                    <div className="flex items-center gap-4 mb-4">
                      {s.icon ? <img src={s.icon} alt={s.name} className="w-16 h-16 rounded-lg" /> : <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center"><Server className="w-8 h-8 text-white" /></div>}
                      <div className="flex-1"><h3 className="text-white font-bold text-lg group-hover:text-cyan-400">{s.name}</h3><p className="text-gray-500 text-sm font-mono">{s.memberCount} miembros</p></div>
                    </div>
                    <div className="flex items-center justify-between text-xs"><span className="text-cyan-400 font-mono">BOT ACTIVO</span><ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-2 transition-transform" /></div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <style>{`@keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }`}</style>
      </div>
    );
  }

  // DASHBOARD
  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">{particles.map((p) => (<div key={p.id} className="absolute rounded-full bg-cyan-500/20" style={{ left: `${p.x}%`, top: `${p.y}%`, width: `${p.size}px`, height: `${p.size}px`, animation: `float ${p.duration}s infinite ease-in-out ${p.delay}s` }} />))}</div>
      <div className="fixed inset-0 pointer-events-none opacity-10"><div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#00E5FF 1px, transparent 1px), linear-gradient(90deg, #00E5FF 1px, transparent 1px)', backgroundSize: '50px 50px' }} /></div>
      
      <header className="bg-gray-800/80 backdrop-blur-xl border-b border-cyan-500/10 sticky top-0 z-40">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {serverData?.icon ? <img src={serverData.icon} alt={serverData.name} className="w-12 h-12 rounded-lg" /> : <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center"><Server className="w-7 h-7 text-gray-900" /></div>}
            <div><h1 className="text-2xl font-bold text-white">{serverData?.name}</h1><p className="text-xs text-cyan-400 font-mono"><span className="w-1.5 h-1.5 bg-cyan-400 rounded-full inline-block mr-1 animate-pulse"></span>Actualización cada 30s</p></div>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => setView('servers')} className="px-4 py-2 bg-gray-900/50 border border-cyan-500/20 rounded-lg text-cyan-400 hover:bg-gray-900 font-mono text-xs">← Cambiar</button>
            <div className="relative">
              <button onClick={() => setShowUserMenu(!showUserMenu)} className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center text-gray-900 font-bold hover:scale-110 transition-all">
                {userInfo?.avatar ? <img src={userInfo.avatar} alt="Avatar" className="w-full h-full rounded-lg" /> : <span>{userInfo?.username?.charAt(0) || 'A'}</span>}
              </button>
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-64 bg-gray-800/95 backdrop-blur-xl rounded-lg shadow-2xl border border-cyan-500/20 overflow-hidden">
                  <div className="p-4 border-b border-cyan-500/10 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center text-gray-900 font-bold"><span>{userInfo?.username?.charAt(0) || 'A'}</span></div>
                      <div><p className="font-bold text-white">{userInfo?.username || 'Admin'}</p><p className="text-xs text-gray-400 font-mono">#{userInfo?.discriminator || '0000'}</p></div>
                    </div>
                  </div>
                  <div className="p-2">
                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-900 text-gray-300 hover:text-white transition-all font-mono text-xs group">
                      <LinkIcon className="w-4 h-4 group-hover:scale-110 transition-transform" /><span>CONECTAR OTRA CUENTA</span>
                    </button>
                    <div className="my-2 border-t border-cyan-500/10"></div>
                    <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-600/20 text-red-400 hover:text-red-300 transition-all font-mono text-xs group">
                      <LogOut className="w-4 h-4 group-hover:translate-x-1 transition-transform" /><span>CERRAR SESIÓN</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside className={`${sidebarCollapsed ? 'w-20' : 'w-64'} bg-gray-800/80 backdrop-blur-xl min-h-screen border-r border-cyan-500/10 transition-all`}>
          <div className="p-4">
            <button onClick={() => setSidebarCollapsed(!sidebarCollapsed)} className="w-full mb-4 flex items-center justify-center py-2 text-cyan-400 hover:text-cyan-300">
              {sidebarCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronDown className="w-5 h-5 rotate-90" />}
            </button>
            <nav className="space-y-1">
              {menuItems.map((item) => (
                <div key={item.id}>
                  <button onClick={() => { if (item.submenu.length > 0) toggleMenu(item.id); else setActiveSection(item.id); }} className={`w-full flex items-center ${sidebarCollapsed ? 'justify-center' : 'justify-between'} px-4 py-3 rounded-lg transition-all ${activeSection === item.id || activeSection.startsWith(item.id + '-') ? 'bg-gray-900 text-cyan-400 border border-cyan-500/30' : 'text-gray-400 hover:bg-gray-900/50 hover:text-white'}`}>
                    <div className={`flex items-center ${sidebarCollapsed ? '' : 'gap-3'}`}><item.icon className="w-4 h-4" />{!sidebarCollapsed && <span className="text-xs uppercase">{item.label}</span>}</div>
                    {!sidebarCollapsed && item.submenu.length > 0 && (expandedMenu[item.id] ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />)}
                  </button>
                  {!sidebarCollapsed && item.submenu.length > 0 && expandedMenu[item.id] && (
                    <div className="ml-4 mt-1 space-y-1">{item.submenu.map((sub) => (<button key={sub.id} onClick={() => setActiveSection(sub.id)} className={`w-full text-left px-4 py-2 rounded-lg text-xs ${activeSection === sub.id ? 'bg-purple-500/20 text-purple-400' : 'text-gray-500 hover:bg-gray-900/30'}`}>› {sub.label}</button>))}</div>
                  )}
                </div>
              ))}
            </nav>
            {!sidebarCollapsed && serverData && (
              <div className="mt-8 p-4 bg-gray-900 rounded-lg border border-cyan-500/10">
                <div className="flex items-center gap-2 mb-2"><div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div><span className="text-xs font-mono text-cyan-400">ESTADO</span></div>
                <p className="text-xs text-gray-400 font-mono">Ping: {serverData.bot.ping}ms</p>
                <p className="text-xs text-gray-400 font-mono">Online: {serverData.members.online}/{serverData.members.total}</p>
              </div>
            )}
          </div>
        </aside>
        <main className="flex-1 p-6">{loading ? (<div className="flex items-center justify-center h-full"><div className="text-center"><div className="w-16 h-16 mx-auto mb-4 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div><p className="text-gray-400 font-mono">Cargando datos...</p></div></div>) : renderContent()}</main>
      </div>
      <style>{`@keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }`}</style>
    </div>
  );
};

export default BotDashboard;
