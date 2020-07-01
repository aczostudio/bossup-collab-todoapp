using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace bossup_collab_todo1.Migrations
{
    public partial class TimespanToDatetime : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "TodoTime",
                table: "TodoItem",
                nullable: false,
                oldClrType: typeof(TimeSpan),
                oldType: "time");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<TimeSpan>(
                name: "TodoTime",
                table: "TodoItem",
                type: "time",
                nullable: false,
                oldClrType: typeof(DateTime));
        }
    }
}
