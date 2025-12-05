import React from 'react';
import { User, DashboardView } from '../types';
import { 
  Bot, 
  LayoutDashboard, 
  CheckSquare, 
  FileText, 
  Users, 
  Megaphone, 
  LogOut, 
  UserRound,
  Bell,
  Code,
  Sun,
  Moon
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

interface DashboardProps {
  user: User;
  onLogout: () => void;
  currentView: DashboardView;
  onViewChange: (view: DashboardView) => void;
  onAgentToggle: () => void;
  isDarkMode: boolean;
  onThemeToggle: () => void;
}

const mockChartData = [
  { name: 'Mon', churn: 4, retention: 24, sales: 2400 },
  { name: 'Tue', churn: 3, retention: 28, sales: 1398 },
  { name: 'Wed', churn: 2, retention: 35, sales: 9800 },
  { name: 'Thu', churn: 2, retention: 40, sales: 3908 },
  { name: 'Fri', churn: 1, retention: 45, sales: 4800 },
  { name: 'Sat', churn: 2, retention: 42, sales: 3800 },
  { name: 'Sun', churn: 1, retention: 48, sales: 4300 },
];

const Dashboard: React.FC<DashboardProps> = ({ user, onLogout, currentView, onViewChange, onAgentToggle, isDarkMode, onThemeToggle }) => {
  
  const navItems: { id: DashboardView; label: string; icon: React.ElementType }[] = [
    { id: 'dashboard', label: 'Client Overview', icon: LayoutDashboard },
    { id: 'tasks', label: 'Active Projects', icon: CheckSquare },
    { id: 'documents', label: 'Deliverables', icon: FileText },
    { id: 'team', label: 'Collaborators', icon: Users },
    { id: 'campaigns', label: 'Analytics', icon: Megaphone },
  ];

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return (
          <div className="space-y-8 animate-fade-in">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-100 dark:border-neutral-700 shadow-sm transition-colors">
                   <div className="text-xs font-space uppercase text-neutral-400 mb-1">Total Project Views</div>
                   <div className="text-3xl font-oswald font-medium text-neutral-900 dark:text-white">1,248</div>
                   <div className="text-xs text-green-600 mt-2 flex items-center gap-1">+12% vs last month</div>
                </div>
                <div className="p-6 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-100 dark:border-neutral-700 shadow-sm transition-colors">
                   <div className="text-xs font-space uppercase text-neutral-400 mb-1">Avg. Session Duration</div>
                   <div className="text-3xl font-oswald font-medium text-neutral-900 dark:text-white">4m 20s</div>
                   <div className="text-xs text-green-600 mt-2 flex items-center gap-1">High Engagement</div>
                </div>
                <div className="p-6 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-100 dark:border-neutral-700 shadow-sm transition-colors">
                   <div className="text-xs font-space uppercase text-neutral-400 mb-1">Project Revenue (Demo)</div>
                   <div className="text-3xl font-oswald font-medium text-neutral-900 dark:text-white">$12k</div>
                   <div className="text-xs text-green-600 mt-2 flex items-center gap-1">On track</div>
                </div>
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="p-6 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-100 dark:border-neutral-700 shadow-sm h-[300px] transition-colors">
                   <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider text-neutral-900 dark:text-white">Traffic Analysis</h3>
                   <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={mockChartData}>
                        <defs>
                          <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={isDarkMode ? '#ffffff' : '#171717'} stopOpacity={0.8}/>
                            <stop offset="95%" stopColor={isDarkMode ? '#ffffff' : '#171717'} stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDarkMode ? '#404040' : '#ccc'} />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: isDarkMode ? '#a3a3a3' : '#666'}} />
                        <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: isDarkMode ? '#a3a3a3' : '#666'}} />
                        <Tooltip contentStyle={{ backgroundColor: isDarkMode ? '#171717' : '#fff', borderColor: isDarkMode ? '#333' : '#ccc', color: isDarkMode ? '#fff' : '#000' }} />
                        <Area type="monotone" dataKey="sales" stroke={isDarkMode ? '#ffffff' : '#171717'} fillOpacity={1} fill="url(#colorSales)" />
                      </AreaChart>
                   </ResponsiveContainer>
                </div>

                <div className="p-6 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-100 dark:border-neutral-700 shadow-sm h-[300px] transition-colors">
                   <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider text-neutral-900 dark:text-white">User Engagement</h3>
                   <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={mockChartData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDarkMode ? '#404040' : '#ccc'} />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: isDarkMode ? '#a3a3a3' : '#666'}} />
                        <Tooltip contentStyle={{ backgroundColor: isDarkMode ? '#171717' : '#fff', borderColor: isDarkMode ? '#333' : '#ccc', color: isDarkMode ? '#fff' : '#000' }} />
                        <Bar dataKey="retention" fill="#10B981" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="churn" fill="#EF4444" radius={[4, 4, 0, 0]} />
                      </BarChart>
                   </ResponsiveContainer>
                </div>
             </div>
          </div>
        );
      case 'team':
        return (
          <div className="p-8 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-100 dark:border-neutral-700 shadow-sm min-h-[400px] flex items-center justify-center animate-fade-in transition-colors">
             <div className="text-center">
               <Users className="w-12 h-12 text-neutral-300 dark:text-neutral-600 mx-auto mb-4" />
               <h3 className="text-xl font-oswald mb-2 text-neutral-900 dark:text-white">Collaborator Network</h3>
               <p className="text-neutral-500 dark:text-neutral-400 max-w-md">This demo module shows how I manage agile teams and permissions for client projects.</p>
             </div>
          </div>
        );
      default:
        return (
          <div className="p-8 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-100 dark:border-neutral-700 shadow-sm min-h-[400px] flex items-center justify-center animate-fade-in transition-colors">
             <div className="text-center">
               <Bot className="w-12 h-12 text-neutral-300 dark:text-neutral-600 mx-auto mb-4" />
               <h3 className="text-xl font-oswald mb-2 text-neutral-900 dark:text-white">Demo Module</h3>
               <p className="text-neutral-500 dark:text-neutral-400">This section demonstrates the modular architecture of my web applications.</p>
             </div>
          </div>
        );
    }
  }

  return (
    <div className="flex h-full">
      {/* Sidebar Nav */}
      <aside className="hidden md:flex flex-col w-64 border-r border-neutral-200 dark:border-neutral-800 bg-zinc-50/50 dark:bg-neutral-900/50 p-6 z-20 transition-colors">
         <div className="flex items-center gap-3 mb-10">
            <div className="flex text-white bg-neutral-900 dark:bg-white dark:text-neutral-900 w-8 h-8 rounded-lg items-center justify-center transition-colors">
              <Code className="w-4 h-4 text-slate-50 dark:text-neutral-900" />
            </div>
            <span className="uppercase font-oswald text-lg font-medium tracking-tight text-neutral-900 dark:text-white">FRANKLIN</span>
         </div>

         <div className="space-y-2 flex-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onViewChange(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive 
                      ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-md shadow-neutral-900/10' 
                      : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </button>
              );
            })}
         </div>

         <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800">
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-br from-neutral-100 to-white dark:from-neutral-800 dark:to-neutral-900 border border-neutral-200 dark:border-neutral-800">
               <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center text-orange-600 dark:text-orange-400">
                 <Bot className="w-4 h-4" />
               </div>
               <div>
                 <div className="text-xs font-bold text-neutral-900 dark:text-white">AI Assistant</div>
                 <div className="text-[10px] text-green-600 dark:text-green-400 flex items-center gap-1">
                   <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                   Online
                 </div>
               </div>
            </div>
         </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full relative overflow-hidden">
        <header className="flex items-center justify-between px-6 py-5 border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md sticky top-0 z-30 transition-colors">
           <h1 className="text-xl font-oswald font-medium uppercase tracking-tight text-neutral-900 dark:text-white">
             {navItems.find(n => n.id === currentView)?.label}
           </h1>

           <div className="flex items-center gap-4">
            <button 
              onClick={onThemeToggle}
              className="p-2 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

             <button onClick={onAgentToggle} className="md:hidden p-2 text-neutral-600 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 rounded-full">
               <Bot className="w-5 h-5" />
             </button>
             
             <button className="relative p-2 text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
               <Bell className="w-5 h-5" />
               <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white dark:border-neutral-900"></span>
             </button>

             <div className="h-6 w-px bg-neutral-200 dark:bg-neutral-800"></div>

             <div className="flex items-center gap-3">
                <div className="text-right hidden md:block">
                  <div className="text-xs font-bold text-neutral-900 dark:text-white">{user.displayName}</div>
                  <div className="text-[10px] text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">{user.role}</div>
                </div>
                <div className="w-9 h-9 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center border border-neutral-200 dark:border-neutral-700">
                  <UserRound className="w-4 h-4 text-neutral-600 dark:text-neutral-300" />
                </div>
                <button 
                  onClick={onLogout}
                  className="p-2 text-neutral-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-colors"
                  title="Logout"
                >
                  <LogOut className="w-4 h-4" />
                </button>
             </div>
           </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6 md:p-10 bg-zinc-50/30 dark:bg-black/20 transition-colors">
           {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;