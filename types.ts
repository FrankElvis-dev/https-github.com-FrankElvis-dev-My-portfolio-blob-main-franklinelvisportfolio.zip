export interface User {
  username: string;
  role: 'admin' | 'user' | 'guest';
  displayName: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

export type DashboardView = 'dashboard' | 'tasks' | 'documents' | 'team' | 'campaigns';

export interface AgentContext {
  name: string;
  subtitle: string;
}