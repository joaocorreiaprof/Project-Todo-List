# Project-Todo-List

This project is a simple, yet powerful tool to help you manage your tasks and stay organized. Whether you're a developer looking to contribute or a user in need of a robust task manager, this project is designed to meet your needs.

## Todo xD

## Brainstorming

-todo.js is working fine and also his class constructure

## form for todos

<form>
              <label for="project-name">Project name:</label><br />
              <input
                type="text"
                id="project-name"
                name="project-name"
                placeholder="Your project name..."
                required
              /><br />
              <label for="project-description">Project description:</label
              ><br />
              <input
                type="text"
                id="project-description"
                name="project-description"
                placeholder="Description..."
              />

              <p>Project priority:</p>
              <input type="radio" id="low" name="priority" value="Low" />
              <label for="low">Low</label><br />
              <input type="radio" id="medium" name="priority" value="Medium" />
              <label for="medium">Medium</label><br />
              <input type="radio" id="high" name="priority" value="High" />
              <label for="high">High</label>
              <br />

              <label for="notes">Notes:</label>
              <br />

              <input
                type="text"
                id="notes"
                class="notes"
                placeholder="Write a note...."
              />
              <br />
              <input type="checkbox" id="checklist" name="done" value="done" />
              <label for="done">Done</label>
              <br />
              <input type="submit" value="submit" />
            </form>
