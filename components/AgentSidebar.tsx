import React, { useEffect, useState, useRef } from 'react';
import { Bot, ChevronLeft, Sparkles, ArrowUp } from 'lucide-react';
import { DashboardView } from '../types';

interface AgentSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  context: DashboardView | 'landing';
}

const AgentSidebar: React.FC<AgentSidebarProps> = ({ isOpen, onToggle, context }) => {
  const [messages, setMessages] = useState<{ role: 'agent' | 'user'; text: string }[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Agent Context Logic
  const getAgentContext = (ctx: string) => {
    switch (ctx) {
      case 'dashboard':
        return { name: 'Project Assistant', subtitle: 'Client Overview', greeting: 'Hello! I can help you navigate the client dashboard demo. What would you like to see?' };
      case 'tasks':
        return { name: 'Workflow Agent', subtitle: 'Task Management', greeting: 'I can explain how Franklin structures project workflows. Ask me about his agile process.' };
      case 'documents':
        return { name: 'Doc Assistant', subtitle: 'Documentation', greeting: 'Looking for technical specs or design systems? I can guide you through Franklin\'s documentation style.' };
      default:
        return { name: 'Franklin\'s AI', subtitle: 'Portfolio Assistant', greeting: 'Hi! I am Franklin\'s digital assistant. Ask me about his experience, tech stack, or availability for freelance work.' };
    }
  };

  const agentInfo = getAgentContext(context);

  useEffect(() => {
    // Reset conversation on context switch
    setMessages([{ role: 'agent', text: agentInfo.greeting }]);
  }, [context]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    const userMsg = inputValue;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      setIsTyping(false);
      
      let response = "I've noted that. Franklin is currently open to new opportunities!";
      
      if (userMsg.toLowerCase().includes('experience')) {
        response = "Franklin has over 1 year of experience in UI/UX design and Web Development, delivering 10+ projects.";
      } else if (userMsg.toLowerCase().includes('stack') || userMsg.toLowerCase().includes('tech')) {
        response = "Franklin's core stack includes React, TypeScript, Tailwind CSS, Node.js, and Figma for design.";
      } else if (userMsg.toLowerCase().includes('contact') || userMsg.toLowerCase().includes('email')) {
        response = "You can reach him directly at contact@franklinelvis.com.";
      }

      setMessages(prev => [...prev, { 
        role: 'agent', 
        text: response
      }]);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div 
      className={`fixed flex h-[70vh] z-50 top-1/2 -translate-y-1/2 right-0 items-center md:h-[85vh] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'translate-x-0' : 'translate-x-[calc(100%-2.5rem)] md:translate-x-[calc(100%-3rem)]'}`}
    >
      {/* Toggle Tab */}
      <button 
        onClick={onToggle}
        className="bg-neutral-900 dark:bg-neutral-800 text-white w-10 h-40 rounded-l-xl shadow-lg flex flex-col gap-4 items-center justify-center border-y border-l border-white/10 cursor-pointer hover:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors z-20 outline-none md:w-12 md:h-48"
      >
        <Bot className="w-5 h-5 text-slate-50" />
        <div className="h-px w-6 bg-white/20"></div>
        <ChevronLeft className={`w-5 h-5 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Panel Content */}
      <div className="w-full max-w-md h-full bg-white dark:bg-neutral-900 border-l border-neutral-200 dark:border-neutral-800 shadow-2xl p-4 flex flex-col relative z-10 rounded-bl-2xl md:w-[28rem] md:p-6 md:rounded-bl-3xl transition-colors">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-6 pb-4 border-b border-neutral-100 dark:border-neutral-800">
          <div className="w-10 h-10 rounded-full bg-neutral-900 dark:bg-white flex items-center justify-center text-white dark:text-neutral-900 shrink-0 transition-colors">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold uppercase tracking-wide font-oswald text-neutral-900 dark:text-white leading-none">
                {agentInfo.name}
              </span>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            </div>
            <p className="text-[0.65rem] text-neutral-400 font-space uppercase tracking-widest mt-1">
              {agentInfo.subtitle}
            </p>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto space-y-6 mb-4 pr-2">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${msg.role === 'agent' ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white' : 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900'}`}>
                {msg.role === 'agent' ? <Bot className="w-4 h-4" /> : <div className="text-xs font-bold">YOU</div>}
              </div>
              <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm max-w-[80%] ${
                msg.role === 'agent' 
                  ? 'bg-neutral-100 dark:bg-neutral-800 rounded-tl-none text-neutral-700 dark:text-neutral-300' 
                  : 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-tr-none'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && (
             <div className="flex gap-4">
               <div className="w-8 h-8 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center shrink-0">
                 <Bot className="w-4 h-4 text-neutral-900 dark:text-white" />
               </div>
               <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-2xl rounded-tl-none text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed shadow-sm">
                 <div className="flex gap-1">
                   <span className="w-1.5 h-1.5 bg-neutral-400 dark:bg-neutral-500 rounded-full animate-bounce"></span>
                   <span className="w-1.5 h-1.5 bg-neutral-400 dark:bg-neutral-500 rounded-full animate-bounce delay-75"></span>
                   <span className="w-1.5 h-1.5 bg-neutral-400 dark:bg-neutral-500 rounded-full animate-bounce delay-150"></span>
                 </div>
               </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="relative mt-auto pt-4 border-t border-neutral-100 dark:border-neutral-800">
          <textarea 
            rows={3}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Ask about my tech stack, experience, or rates..." 
            className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl p-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white focus:bg-white dark:focus:bg-neutral-900 transition-all resize-none placeholder:text-neutral-400 dark:text-white"
          ></textarea>
          <button 
            onClick={handleSend}
            className="absolute right-3 bottom-3 p-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-lg shadow-neutral-900/10"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgentSidebar;