import { 
  users, services, projects, testimonials,
  type User, type InsertUser,
  type Service, type InsertService,
  type Project, type InsertProject,
  type Testimonial, type InsertTestimonial
} from "@shared/schema";

export interface IStorage {
  // Users
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Services
  getAllServices(): Promise<Service[]>;
  getService(id: number): Promise<Service | undefined>;
  createService(service: InsertService): Promise<Service>;
  
  // Projects
  getAllProjects(): Promise<Project[]>;
  getProject(id: number): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
  
  // Testimonials
  getAllTestimonials(): Promise<Testimonial[]>;
  getTestimonial(id: number): Promise<Testimonial | undefined>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private services: Map<number, Service>;
  private projects: Map<number, Project>;
  private testimonials: Map<number, Testimonial>;
  
  private currentUserId: number;
  private currentServiceId: number;
  private currentProjectId: number;
  private currentTestimonialId: number;

  constructor() {
    this.users = new Map();
    this.services = new Map();
    this.projects = new Map();
    this.testimonials = new Map();
    
    this.currentUserId = 1;
    this.currentServiceId = 1;
    this.currentProjectId = 1;
    this.currentTestimonialId = 1;
    
    // Initialize with sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Sample testimonials
    const testimonials = [
      {
        id: this.currentTestimonialId++,
        userId: 1,
        content: "Comecei gravando 5 depoimentos por semana. Em 3 meses, já estava fazendo disso minha renda principal. A plataforma conecta você com clientes que realmente valorizam qualidade.",
        rating: 5,
        role: "Design de Interiores",
        createdAt: new Date().toISOString(),
      },
      {
        id: this.currentTestimonialId++,
        userId: 2,
        content: "Faço unboxings e reviews nos finais de semana. No primeiro mês já faturei mais de R$ 1.200. O melhor é a flexibilidade e o pagamento pontual, sem complicações.",
        rating: 5,
        role: "Professor",
        createdAt: new Date().toISOString(),
      },
      {
        id: this.currentTestimonialId++,
        userId: 3,
        content: "Consigo conciliar os estudos com a criação de conteúdo. Gravo entre 10-15 vídeos por mês e isso me ajuda a pagar as contas e ainda sobra para investir. Plataforma incrível!",
        rating: 4,
        role: "Estudante",
        createdAt: new Date().toISOString(),
      }
    ];
    
    testimonials.forEach(testimonial => {
      this.testimonials.set(testimonial.id, testimonial as Testimonial);
    });
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { 
      ...insertUser, 
      id,
      isFreelancer: insertUser.isFreelancer ?? true,
      avatarUrl: insertUser.avatarUrl ?? null,
      bio: insertUser.bio ?? null,
    };
    this.users.set(id, user);
    return user;
  }
  
  // Service methods
  async getAllServices(): Promise<Service[]> {
    return Array.from(this.services.values());
  }
  
  async getService(id: number): Promise<Service | undefined> {
    return this.services.get(id);
  }
  
  async createService(insertService: InsertService): Promise<Service> {
    const id = this.currentServiceId++;
    const service: Service = { ...insertService, id };
    this.services.set(id, service);
    return service;
  }
  
  // Project methods
  async getAllProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }
  
  async getProject(id: number): Promise<Project | undefined> {
    return this.projects.get(id);
  }
  
  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = this.currentProjectId++;
    const project: Project = { 
      ...insertProject, 
      id,
      assignedTo: insertProject.assignedTo ?? null,
      dueDate: insertProject.dueDate ?? null,
    };
    this.projects.set(id, project);
    return project;
  }
  
  // Testimonial methods
  async getAllTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }
  
  async getTestimonial(id: number): Promise<Testimonial | undefined> {
    return this.testimonials.get(id);
  }
  
  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.currentTestimonialId++;
    const testimonial: Testimonial = { 
      ...insertTestimonial, 
      id,
      role: insertTestimonial.role ?? null,
    };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }
}

export const storage = new MemStorage();
