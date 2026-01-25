import React, { useState, useEffect } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Settings, Users, Shield, MessageSquare, DollarSign, Gamepad2, Bell, Activity, AlertTriangle, CheckCircle, XCircle, BarChart3, Command, MessageCircle, Music, Eye, ChevronDown, ChevronRight, Search, Save, LogOut, Moon, Sun, User, Zap, X } from 'lucide-react';

const BotDashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [selectedServer, setSelectedServer] = useState('server1');
  const [expandedMenu, setExpandedMenu] = useState({});
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [showNotification, setShowNotification] = useState(false);
  const [particles, setParticles] = useState([]);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [tooltip, setTooltip] = useState({ show: false, text: '', x: 0, y: 0 });
  
  // Estados funcionales para el embed builder
  const [embedTitle, setEmbedTitle] = useState('AURØRE • Learning Core');
  const [embedDescription, setEmbedDescription] = useState('Esta es la descripción de tu mensaje embed. Puedes personalizarlo completamente con el estilo AURØRE.');
  const [embedColor, setEmbedColor] = useState('#00E5FF');

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
    setTimeout(() => {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 5000);
    }, 1000);
  }, []);
  const stats = {
    totalUsers: 15420,
    activeUsers: 3240,
    messageToday: 12450,
    commandsUsed: 1820,
    bansToday: 12,
    warnsToday: 45,
    revenue: 2840
  };

  const activityData = [
    { time: '00:00', mensajes: 120, comandos: 15 },
    { time: '04:00', mensajes: 80, comandos: 8 },
    { time: '08:00', mensajes: 350, comandos: 45 },
    { time: '12:00', mensajes: 680, comandos: 89 },
    { time: '16:00', mensajes: 920, comandos: 125 },
    { time: '20:00', mensajes: 1100, comandos: 142 },
    { time: '23:00', mensajes: 580, comandos: 68 }
  ];

  const topCommands = [
    { name: 'play', uses: 342, color: '#00E5FF' },
    { name: 'ban', uses: 89, color: '#7C6CFF' },
    { name: 'daily', uses: 256, color: '#00E5FF' },
    { name: 'warn', uses: 145, color: '#7C6CFF' },
    { name: 'help', uses: 234, color: '#00E5FF' }
  ];

  const recentLogs = [
    { type: 'ban', user: 'Usuario#1234', reason: 'Spam', time: 'Hace 5 min', severity: 'high' },
    { type: 'join', user: 'NuevoUser#5678', time: 'Hace 12 min', severity: 'low' },
    { type: 'warn', user: 'Infractor#9012', reason: 'Lenguaje inapropiado', time: 'Hace 18 min', severity: 'medium' },
    { type: 'message_delete', user: 'Sistema', details: '23 mensajes eliminados por spam', time: 'Hace 25 min', severity: 'medium' },
    { type: 'role_add', user: 'MiembroActivo#3456', details: 'Rol: VIP', time: 'Hace 32 min', severity: 'low' }
  ];
  const menuItems = [
    { id: 'overview', label: 'Dashboard', icon: BarChart3, submenu: [], tooltip: 'Vista general del sistema' },
    { id: 'moderation', label: 'Moderation', icon: Shield, submenu: [
        { id: 'mod-actions', label: 'Actions' },
        { id: 'mod-automod', label: 'Auto-Mod' },
        { id: 'mod-filters', label: 'Filters' },
        { id: 'mod-logs', label: 'Logs' }
      ], tooltip: 'Herramientas de moderación' },
    { id: 'roles', label: 'Roles', icon: Users, submenu: [
        { id: 'roles-auto', label: 'Auto Roles' },
        { id: 'roles-reaction', label: 'Reaction Roles' },
        { id: 'roles-levels', label: 'Level Roles' }
      ], tooltip: 'Gestión de roles' },
    { id: 'messages', label: 'Messages', icon: MessageSquare, submenu: [
        { id: 'msg-embeds', label: 'Embeds' },
        { id: 'msg-welcome', label: 'Welcome' },
        { id: 'msg-announcements', label: 'Announcements' }
      ], tooltip: 'Sistema de mensajes' },
    { id: 'economy', label: 'Economy', icon: DollarSign, submenu: [
        { id: 'eco-config', label: 'Configuration' },
        { id: 'eco-shop', label: 'Shop' },
        { id: 'eco-rankings', label: 'Rankings' }
      ], tooltip: 'Economía virtual' },
    { id: 'games', label: 'Games', icon: Gamepad2, submenu: [
        { id: 'games-levels', label: 'Level System' },
        { id: 'games-mini', label: 'Mini Games' },
        { id: 'games-rpg', label: 'RPG' }
      ], tooltip: 'Juegos y diversión' },
    { id: 'music', label: 'Music', icon: Music, submenu: [], tooltip: 'Sistema de música' },
    { id: 'notifications', label: 'Notifications', icon: Bell, submenu: [], tooltip: 'Alertas y notificaciones' },
    { id: 'settings', label: 'Settings', icon: Settings, submenu: [], tooltip: 'Configuración general' }
  ];

  const toggleMenu = (id) => {
    setExpandedMenu(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const getSeverityColor = (severity) => {
    switch(severity) {
      case 'high': return 'text-red-400';
      case 'medium': return 'text-purple-400';
      case 'low': return 'text-cyan-400';
      default: return 'text-gray-400';
    }
  };

  const getLogIcon = (type) => {
    switch(type) {
      case 'ban': return <XCircle className="w-4 h-4" />;
      case 'warn': return <AlertTriangle className="w-4 h-4" />;
      case 'join': return <CheckCircle className="w-4 h-4" />;
      default: return <Activity className="w-4 h-4" />;
    }
  };

  const showTooltip = (e, text) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltip({ show: true, text, x: rect.left + rect.width / 2, y: rect.top - 10 });
  };

  const hideTooltip = () => {
    setTooltip({ show: false, text: '', x: 0, y: 0 });
  };

  const openModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };
  const renderContent = () => {
    if (activeSection === 'overview') {
      return (
        <div className="space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gray-800 rounded-lg p-6 border border-cyan-500/20 relative overflow-hidden group hover:border-cyan-500/50 transition-all hover:scale-105 cursor-pointer">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <Users className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-cyan-400 font-mono animate-pulse">◉ ACTIVE</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1 tracking-tight group-hover:text-cyan-400 transition-colors">{stats.totalUsers.toLocaleString()}</div>
                <div className="text-gray-400 text-xs font-medium tracking-widest uppercase">Total Users</div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-purple-500/20 relative overflow-hidden group hover:border-purple-500/50 transition-all hover:scale-105 cursor-pointer">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <Activity className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-purple-400 font-mono animate-pulse">▸ ONLINE</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1 tracking-tight group-hover:text-purple-400 transition-colors">{stats.activeUsers.toLocaleString()}</div>
                <div className="text-gray-400 text-xs font-medium tracking-widest uppercase">Active Users</div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-cyan-500/20 relative overflow-hidden group hover:border-cyan-500/50 transition-all hover:scale-105 cursor-pointer">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <MessageCircle className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-cyan-400 font-mono animate-pulse">› TRACKED</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1 tracking-tight group-hover:text-cyan-400 transition-colors">{stats.messageToday.toLocaleString()}</div>
                <div className="text-gray-400 text-xs font-medium tracking-widest uppercase">Messages Today</div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-purple-500/20 relative overflow-hidden group hover:border-purple-500/50 transition-all hover:scale-105 cursor-pointer">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <Command className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-purple-400 font-mono animate-pulse">▸ EXEC</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1 tracking-tight group-hover:text-purple-400 transition-colors">{stats.commandsUsed.toLocaleString()}</div>
                <div className="text-gray-400 text-xs font-medium tracking-widest uppercase">Commands Used</div>
              </div>
            </div>
          </div>
          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-gray-800 rounded-lg p-6 border border-cyan-500/10 hover:border-cyan-500/30 transition-all">
              <h3 className="text-sm font-bold text-white mb-4 tracking-widest uppercase flex items-center gap-2">
                <span className="text-cyan-400 animate-pulse">▸</span> Activity Protocol
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={activityData}>
                  <defs>
                    <linearGradient id="colorMensajes" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00E5FF" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#00E5FF" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorComandos" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#7C6CFF" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#7C6CFF" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="time" stroke="#9CA3AF" style={{ fontSize: '12px' }} />
                  <YAxis stroke="#9CA3AF" style={{ fontSize: '12px' }} />
                  <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #00E5FF', borderRadius: '8px', color: '#F3F4F6', fontSize: '12px' }} />
                  <Legend wrapperStyle={{ fontSize: '12px' }} />
                  <Line type="monotone" dataKey="mensajes" stroke="#00E5FF" strokeWidth={3} dot={{ fill: '#00E5FF', r: 4 }} />
                  <Line type="monotone" dataKey="comandos" stroke="#7C6CFF" strokeWidth={3} dot={{ fill: '#7C6CFF', r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-purple-500/10 hover:border-purple-500/30 transition-all">
              <h3 className="text-sm font-bold text-white mb-4 tracking-widest uppercase flex items-center gap-2">
                <span className="text-purple-400 animate-pulse">›</span> Top Commands
              </h3>
              <div className="space-y-4">
                {topCommands.map((cmd, idx) => (
                  <div key={idx} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-mono text-gray-300 group-hover:text-white transition-colors">/{cmd.name}</span>
                      <span className="text-xs font-bold text-white group-hover:scale-110 transition-transform">{cmd.uses}</span>
                    </div>
                    <div className="w-full bg-gray-900 rounded-full h-2 overflow-hidden">
                      <div className="h-2 rounded-full transition-all duration-700" style={{ width: `${(cmd.uses / topCommands[0].uses) * 100}%`, backgroundColor: cmd.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Recent Logs */}
          <div className="bg-gray-800 rounded-lg p-6 border border-cyan-500/10 hover:border-cyan-500/30 transition-all">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-bold text-white tracking-widest uppercase flex items-center gap-2">
                <span className="text-cyan-400 animate-pulse">◉</span> System Logs
              </h3>
              <button className="text-cyan-400 hover:text-cyan-300 text-xs font-mono transition-all">VIEW ALL ▸</button>
            </div>
            <div className="space-y-2">
              {recentLogs.map((log, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900 transition-all border border-transparent hover:border-cyan-500/20 cursor-pointer group">
                  <div className={`${getSeverityColor(log.severity)} group-hover:scale-125 transition-transform`}>
                    {getLogIcon(log.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-sm text-white group-hover:text-cyan-400 transition-colors">{log.user}</span>
                      <span className="text-xs text-gray-500 font-mono">{log.time}</span>
                    </div>
                    {log.reason && <p className="text-xs text-gray-400 font-mono">› {log.reason}</p>}
                    {log.details && <p className="text-xs text-gray-400 font-mono">› {log.details}</p>}
                  </div>
                  <button className="text-gray-500 hover:text-cyan-400 transition-all group-hover:scale-110">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
    if (activeSection === 'mod-actions') {
      return (
        <div className="space-y-6">
          <div className="bg-gray-800 rounded-lg p-6 border border-cyan-500/10">
            <h2 className="text-lg font-bold text-white mb-6 tracking-widest uppercase flex items-center gap-2">
              <Shield className="w-6 h-6 text-cyan-400" />
              Moderation Core
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-900 border border-red-500/20 rounded-lg p-5 hover:border-red-500/40 transition-all hover:scale-105 cursor-pointer group">
                <div className="flex items-center gap-2 mb-2">
                  <XCircle className="w-5 h-5 text-red-400 group-hover:scale-110 transition-transform" />
                  <span className="font-mono text-xs text-red-400 tracking-wider">BANS TODAY</span>
                </div>
                <div className="text-3xl font-bold text-red-400 group-hover:text-red-300 transition-colors">{stats.bansToday}</div>
              </div>
              <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-5 hover:border-purple-500/40 transition-all hover:scale-105 cursor-pointer group">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                  <span className="font-mono text-xs text-purple-400 tracking-wider">WARNS TODAY</span>
                </div>
                <div className="text-3xl font-bold text-purple-400 transition-colors">{stats.warnsToday}</div>
              </div>
              <div className="bg-gray-900 border border-cyan-500/20 rounded-lg p-5 hover:border-cyan-500/40 transition-all hover:scale-105 cursor-pointer group">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span className="font-mono text-xs text-cyan-400 tracking-wider">AUTO-MOD</span>
                </div>
                <div className="text-3xl font-bold text-cyan-400 transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span> ON
                </div>
              </div>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-5 border border-cyan-500/10">
              <h3 className="font-mono text-xs text-white mb-4 tracking-widest">QUICK ACTIONS</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <button onClick={() => openModal('ban')} className="bg-gray-900 hover:bg-red-600/20 text-red-400 border border-red-500/30 hover:border-red-500/50 rounded-lg py-3 px-4 font-mono text-xs transition-all tracking-wider hover:scale-105">BAN USER</button>
                <button onClick={() => openModal('kick')} className="bg-gray-900 hover:bg-orange-600/20 text-orange-400 border border-orange-500/30 hover:border-orange-500/50 rounded-lg py-3 px-4 font-mono text-xs transition-all tracking-wider hover:scale-105">KICK USER</button>
                <button onClick={() => openModal('warn')} className="bg-gray-900 hover:bg-purple-600/20 text-purple-400 border border-purple-500/30 hover:border-purple-500/50 rounded-lg py-3 px-4 font-mono text-xs transition-all tracking-wider hover:scale-105">WARN</button>
                <button onClick={() => openModal('timeout')} className="bg-gray-900 hover:bg-cyan-600/20 text-cyan-400 border border-cyan-500/30 hover:border-cyan-500/50 rounded-lg py-3 px-4 font-mono text-xs transition-all tracking-wider hover:scale-105">TIMEOUT</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (activeSection === 'msg-embeds') {
      return (
        <div className="space-y-6">
          <div className="bg-gray-800 rounded-lg p-6 border border-cyan-500/10">
            <h2 className="text-lg font-bold text-white mb-6 tracking-widest uppercase flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-cyan-400" />
              Embed Constructor
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-2 tracking-wider">TITLE</label>
                  <input type="text" value={embedTitle} onChange={(e) => setEmbedTitle(e.target.value)} placeholder="Enter title..." className="w-full px-4 py-3 bg-gray-900 border border-cyan-500/20 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all font-mono text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-2 tracking-wider">DESCRIPTION</label>
                  <textarea rows="4" value={embedDescription} onChange={(e) => setEmbedDescription(e.target.value)} placeholder="Enter description..." className="w-full px-4 py-3 bg-gray-900 border border-cyan-500/20 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all font-mono text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-2 tracking-wider">COLOR</label>
                  <input type="color" value={embedColor} onChange={(e) => setEmbedColor(e.target.value)} className="w-full h-12 rounded-lg cursor-pointer border-2 border-cyan-500/20 bg-gray-900" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-2 tracking-wider">IMAGE URL</label>
                    <input type="text" placeholder="https://..." className="w-full px-4 py-3 bg-gray-900 border border-cyan-500/20 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all font-mono text-xs" />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-2 tracking-wider">THUMBNAIL</label>
                    <input type="text" placeholder="https://..." className="w-full px-4 py-3 bg-gray-900 border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all font-mono text-xs" />
                  </div>
                </div>
                <button className="w-full bg-gray-900 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 hover:border-cyan-500/50 rounded-lg py-3 font-mono text-xs transition-all flex items-center justify-center gap-2 tracking-wider hover:scale-105">
                  <Save className="w-4 h-4" />SAVE EMBED
                </button>
              </div>
              <div>
                <label className="block text-xs font-mono text-gray-400 mb-2 tracking-wider">PREVIEW</label>
                <div className="border-l-4 bg-gray-900 rounded-lg p-5" style={{ borderColor: embedColor }}>
                  <div className="mb-4">
                    <h3 className="text-base font-bold text-white tracking-wide">{embedTitle}</h3>
                  </div>
                  <div className="text-gray-300 text-sm mb-4 font-mono">{embedDescription}</div>
                  <div className="bg-gray-800 rounded p-3 border border-cyan-500/10 mb-4">
                    <p className="text-xs text-gray-400 font-mono">› Estado: <span className="text-cyan-400">ACTIVE</span></p>
                    <p className="text-xs text-gray-400 font-mono">› Progreso: <span className="text-purple-400">3 / 9</span></p>
                  </div>
                  <div className="text-xs text-gray-500 font-mono tracking-wider">AURØRE System • Protocol Active</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-gray-800 rounded-lg p-6 border border-cyan-500/10">
        <h2 className="text-lg font-bold text-white mb-4 tracking-widest uppercase">
          {menuItems.find(m => m.id === activeSection)?.label || 'Section'}
        </h2>
        <p className="text-gray-400 font-mono text-sm">› Module under development...</p>
      </div>
    );
  };
  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Partículas de fondo */}
      <div className="fixed inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-cyan-500/20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `float ${particle.duration}s infinite ease-in-out ${particle.delay}s`
            }}
          />
        ))}
      </div>

      {/* Grid de fondo */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#00E5FF 1px, transparent 1px), linear-gradient(90deg, #00E5FF 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>
      {/* Notificación */}
      {showNotification && (
        <div className="fixed top-20 right-6 z-50">
          <div className="bg-gray-800 border border-cyan-500/30 rounded-lg p-4 shadow-2xl flex items-center gap-3 min-w-[300px]">
            <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-cyan-400" />
            </div>
            <div className="flex-1">
              <p className="font-mono text-sm text-white font-bold tracking-wider">PROTOCOL ACTIVE</p>
              <p className="font-mono text-xs text-gray-400">Sistema iniciado correctamente</p>
            </div>
            <button onClick={() => setShowNotification(false)} className="text-gray-500 hover:text-white transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowModal(false)}>
          <div className="bg-gray-800 border border-cyan-500/30 rounded-lg p-6 max-w-md w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white tracking-widest uppercase">{modalType.toUpperCase()} USER</h3>
              <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-gray-400 mb-2 tracking-wider">USER ID</label>
                <input type="text" placeholder="123456789..." className="w-full px-4 py-3 bg-gray-900 border border-cyan-500/20 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all font-mono text-sm" />
              </div>
              <div>
                <label className="block text-xs font-mono text-gray-400 mb-2 tracking-wider">REASON</label>
                <textarea rows="3" placeholder="Enter reason..." className="w-full px-4 py-3 bg-gray-900 border border-cyan-500/20 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all font-mono text-sm" />
              </div>
              <div className="flex gap-3">
                <button onClick={() => setShowModal(false)} className="flex-1 bg-gray-900 hover:bg-gray-700 text-gray-400 hover:text-white border border-gray-700 rounded-lg py-3 font-mono text-xs transition-all tracking-wider">CANCEL</button>
                <button className="flex-1 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 border border-cyan-500/50 rounded-lg py-3 font-mono text-xs transition-all tracking-wider hover:scale-105">CONFIRM</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tooltip */}
      {tooltip.show && (
        <div className="fixed z-50 bg-gray-900 border border-cyan-500/30 rounded-lg px-3 py-2 text-xs font-mono text-white shadow-lg pointer-events-none"
          style={{ left: `${tooltip.x}px`, top: `${tooltip.y}px`, transform: 'translateX(-50%) translateY(-100%)' }}>
          {tooltip.text}
        </div>
      )}
      {/* Header */}
      <header className="bg-gray-800/80 backdrop-blur-xl shadow-2xl border-b border-cyan-500/10 sticky top-0 z-40 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5"></div>
        <div className="px-6 py-4 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg relative overflow-hidden group cursor-pointer hover:scale-110 transition-transform">
                <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
                <Zap className="w-7 h-7 text-gray-900 relative z-10 group-hover:rotate-12 transition-transform" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white tracking-[0.3em] hover:text-cyan-400 transition-colors cursor-pointer">A U R Ø R E</h1>
                <p className="text-xs text-cyan-400 font-mono tracking-wider flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></span>Learning Protocol Active
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <select value={selectedServer} onChange={(e) => setSelectedServer(e.target.value)} className="px-4 py-2.5 bg-gray-900/50 border border-cyan-500/20 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all font-mono text-xs cursor-pointer backdrop-blur">
                <option value="server1">Main Server</option>
                <option value="server2">Test Server</option>
                <option value="server3">Gaming Community</option>
              </select>
              <div className="relative">
                <button onClick={() => setShowUserMenu(!showUserMenu)} className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center text-gray-900 font-bold shadow-lg hover:scale-110 transition-all relative overflow-hidden group">
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="relative z-10">A</span>
                </button>
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-64 bg-gray-800/95 backdrop-blur-xl rounded-lg shadow-2xl border border-cyan-500/20 overflow-hidden">
                    <div className="p-4 border-b border-cyan-500/10 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center text-gray-900 font-bold shadow-lg relative overflow-hidden">
                          <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
                          <span className="relative z-10">A</span>
                        </div>
                        <div>
                          <p className="font-bold text-white tracking-wide">Admin</p>
                          <p className="text-xs text-gray-400 font-mono">admin@aurore.bot</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-2">
                      <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-900 text-gray-300 hover:text-white transition-all font-mono text-xs group">
                        <User className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span className="tracking-wider">MY PROFILE</span>
                      </button>
                      <button onClick={() => setDarkMode(!darkMode)} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-900 text-gray-300 hover:text-white transition-all font-mono text-xs group">
                        {darkMode ? <Sun className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" /> : <Moon className="w-4 h-4 group-hover:-rotate-12 transition-transform" />}
                        <span className="tracking-wider">{darkMode ? 'LIGHT MODE' : 'DARK MODE'}</span>
                      </button>
                      <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-900 text-gray-300 hover:text-white transition-all font-mono text-xs group">
                        <Settings className="w-4 h-4 group-hover:rotate-90 transition-transform" />
                        <span className="tracking-wider">SETTINGS</span>
                      </button>
                      <div className="my-2 border-t border-cyan-500/10"></div>
                      <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-600/20 text-red-400 hover:text-red-300 transition-all font-mono text-xs group">
                        <LogOut className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        <span className="tracking-wider">LOGOUT</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="flex relative">
        {/* Sidebar */}
        <aside className={`${sidebarCollapsed ? 'w-20' : 'w-64'} bg-gray-800/80 backdrop-blur-xl shadow-2xl min-h-screen border-r border-cyan-500/10 transition-all duration-300 relative z-30`}>
          <div className="p-4">
            {!sidebarCollapsed && (
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input type="text" placeholder="Search..." className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-cyan-500/20 rounded-lg text-xs text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all font-mono" />
              </div>
            )}
            <button onClick={() => setSidebarCollapsed(!sidebarCollapsed)} className="w-full mb-4 flex items-center justify-center py-2 text-cyan-400 hover:text-cyan-300 transition-colors">
              {sidebarCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronDown className="w-5 h-5 rotate-90" />}
            </button>
            <nav className="space-y-1">
              {menuItems.map((item) => (
                <div key={item.id}>
                  <button
                    onClick={() => {
                      if (item.submenu.length > 0) {
                        toggleMenu(item.id);
                      } else {
                        setActiveSection(item.id);
                      }
                    }}
                    onMouseEnter={(e) => sidebarCollapsed && item.tooltip && showTooltip(e, item.tooltip)}
                    onMouseLeave={hideTooltip}
                    className={`w-full flex items-center ${sidebarCollapsed ? 'justify-center' : 'justify-between'} px-4 py-3 rounded-lg transition-all font-mono text-xs tracking-wider group ${
                      activeSection === item.id || activeSection.startsWith(item.id + '-')
                        ? 'bg-gray-900 text-cyan-400 border border-cyan-500/30 shadow-lg'
                        : 'text-gray-400 hover:bg-gray-900/50 hover:text-white border border-transparent hover:scale-105'
                    }`}
                  >
                    <div className={`flex items-center ${sidebarCollapsed ? '' : 'gap-3'}`}>
                      <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      {!sidebarCollapsed && <span>{item.label}</span>}
                    </div>
                    {!sidebarCollapsed && item.submenu.length > 0 && (
                      expandedMenu[item.id] ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />
                    )}
                  </button>
                  {!sidebarCollapsed && item.submenu.length > 0 && expandedMenu[item.id] && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.submenu.map((subitem) => (
                        <button
                          key={subitem.id}
                          onClick={() => setActiveSection(subitem.id)}
                          className={`w-full text-left px-4 py-2.5 rounded-lg text-xs transition-all font-mono tracking-wider group ${
                            activeSection === subitem.id
                              ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                              : 'text-gray-500 hover:bg-gray-900/30 hover:text-gray-300 border border-transparent hover:translate-x-1'
                          }`}
                        >
                          › {subitem.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            {!sidebarCollapsed && (
              <div className="mt-8 p-4 bg-gray-900 rounded-lg border border-cyan-500/10 hover:border-cyan-500/30 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-xs font-mono text-cyan-400 tracking-wider">SYSTEM STATUS</span>
                </div>
                <p className="text-xs text-gray-400 font-mono">◉ All protocols active</p>
                <div className="mt-2 w-full bg-gray-800 rounded-full h-1.5 overflow-hidden">
                  <div className="h-1.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full animate-pulse" style={{ width: '87%' }}></div>
                </div>
              </div>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 relative">
          {renderContent()}
        </main>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

export default BotDashboard;