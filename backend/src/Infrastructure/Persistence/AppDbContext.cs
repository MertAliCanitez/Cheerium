using Application.Entities;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Persistence;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<User> Users => Set<User>();
    public DbSet<Workspace> Workspaces => Set<Workspace>();
    public DbSet<WorkspaceUser> WorkspaceUsers => Set<WorkspaceUser>();
    public DbSet<Card> Cards => Set<Card>();
    public DbSet<CardMessage> CardMessages => Set<CardMessage>();
    public DbSet<CardTheme> CardThemes => Set<CardTheme>();
    public DbSet<Collection> Collections => Set<Collection>();
    public DbSet<CollectionCard> CollectionCards => Set<CollectionCard>();
}
