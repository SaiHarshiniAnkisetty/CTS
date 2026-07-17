using EmployeeWebAPI.Filters;
using EmployeeWebAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


namespace EmployeeWebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [CustomAuthFilter]
    public class EmployeeController : ControllerBase
    {
        private readonly List<Employee> employees;

        public EmployeeController()
        {
            employees = GetStandardEmployeeList();
        }

        private List<Employee> GetStandardEmployeeList()
        {
            return new List<Employee>
            {
                new Employee
                {
                    Id = 1,
                    Name = "John",
                    Salary = 50000,
                    Permanent = true,
                    Department = new Department
                    {
                        Id = 101,
                        Name = "IT"
                    },
                    Skills = new List<Skill>
                    {
                        new Skill{ Id = 1, Name = "C#" },
                        new Skill{ Id = 2, Name = ".NET" }
                    },
                    DateOfBirth = new DateTime(1998,5,20)
                },

                new Employee
                {
                    Id = 2,
                    Name = "Alice",
                    Salary = 60000,
                    Permanent = false,
                    Department = new Department
                    {
                        Id = 102,
                        Name = "HR"
                    },
                    Skills = new List<Skill>
                    {
                        new Skill{ Id = 3, Name = "Communication" }
                    },
                    DateOfBirth = new DateTime(1997,8,15)
                }
            };
        }

        [AllowAnonymous]
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult<List<Employee>> GetStandard()
        {
            throw new Exception("This is a custom exception.");
        }

        [HttpPost]
        public IActionResult Post([FromBody] Employee employee)
        {
            employees.Add(employee);
            return Ok(employee);
        }

        [HttpPut]
        public IActionResult Put([FromBody] Employee employee)
        {
            return Ok(employee);
        }
    }
}