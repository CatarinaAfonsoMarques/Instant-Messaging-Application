# agisit25-g17


## Integrate with your tools -REMOVE SECTION?

- [ ] [Set up project integrations](https://gitlab.rnl.tecnico.ulisboa.pt/agisit/agisit25-g17/-/settings/integrations)

## Collaborate with your team -REMOVE SECTION?

- [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Set auto-merge](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

## Test and Deploy -REMOVE SECTION?

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/index.html)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing (SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

***

# Automated Deployment of a Chatapp in Google Cloud
add picture

## Description
Real time chat application developed and deployed on Google Cloud with Terraform, Ansible, Docker and Kubernetes. 

Allows people to communicate by writing on an eletronic device such as a computer or smartphone, with access to the internet. Several users can chat in private or in groups, simultaneously. Saves messages on a database, so that it's always available and accessible. Interface has a list of latest chats on the left, a chat box on the right and a search bar at the top to search for other users. To create a group ... Messages have user identification and a timestamp. 

### Features 
- Real-time messaging
- User registration and authentication 
- History storage
- Responsive interface


Inspired by the chat interfaces of [Whatsapp](https://www.whatsapp.com/), [Telegram](https://telegram.org/) and [Facebook Messenger](https://www.messenger.com/).

--Let people know what your project can do specifically. Provide context and add a link to any reference visitors might be unfamiliar with. A list of Features or a Background subsection can also be added here. If there are alternatives to your project, this is a good place to list differentiating factors.

## Architecture

- **Frontend** Node.js, CSS and HTML
- **Backend** Node.js and ? . Separated into 2 main Microservices (auth-service and chat-service).
- **Database** Mongo-db
- **Infrastructure**
    - Terraform to provision GCP
    - Ansible to configure and deploy VMs
    - Docker for containerization
    - Kubernetes for microservice management

## Badges -REMOVE SECTION?
On some READMEs, you may see small images that convey metadata, such as whether or not all the tests are passing for the project. You can use Shields to add some to your README. Many services also have instructions for adding a badge.

## Visuals
Depending on what you are making, it can be a good idea to include screenshots or even a video (you'll frequently see GIFs rather than actual videos). Tools like ttygif can help, but check out Asciinema for a more sophisticated method.

## The local Git repository for this project

└── chatapp-g17
    ├── infrastructure
    │    ├─ GCPcredentials.json
    │    ├─ ansible-create-cluster.yml
    │    ├─ ansible-delete-deployment.yml
    │    ├─ ansible-gcp-configure-nodes.yml
    │    ├─ ansible-k8s-install.yml
    │    ├─ ansible-start-deployment.yml
    │    ├─ ansible-workers-join.yml
    │    ├─ ansible.cfg
    │    ├─ auth-deployment.yaml
    │    ├─ chat-deployment.yaml
    │    ├─ frontend-deployment.yaml
    │    ├─ gpchosts
    │    ├─ mongo-deployment.yaml
    │    ├─ terraform-gcp-networks.tf
    │    ├─ terraform-gcp-outputs.tf
    │    ├─ terraform-gcp-provider.tf
    │    ├─ terraform-gcp-servers.tf
    │    ├─ terraform-gcp-variables.tf
    │    ├─ terraform.tfstate
    │    └─ terraform.tfstate.backup
    ├── k8s
    │    ├─ auth-deployment.yaml
    │    ├─ chat-deployment.yaml
    │    ├─ frontend-deployment.yaml
    │    └─ mongo-deployment.yaml
    ├── src
    │    ├─ frontend/
    │    │  ├─ Dockerfile
    │    │  ├─ package.json
    │    │  ├─ server.js
    │    │  └─ public/
    │    │     ├─ index.html
    │    │     ├─ app.js
    │    │     └─ styles.css
    │    ├─ auth-service/
    │    │  ├─ Dockerfile
    │    │  ├─ package.json
    │    │  ├─ server.js
    │    │  └─ users.js
    │    └─ chat-service/
    │        ├─ Dockerfile
    │        ├─ groups.js
    │        ├─ package.json
    │        ├─ server.js
    │        └─ messages.js
    ├── docker-compose.yml
    ├── Dockerfile
    └── README.md

## Installation
- **Pre-requisites**
    - Docker & Docker Compose
    - Terraform
    - Ansible
    - Google Cloud account (with `gcloud` and credentials)
    - Unix system (Linux, WSL)

- **Installation**
    - download/git clone
    - 

- **Execution**

Within a particular ecosystem, there may be a common way of installing things, such as using Yarn, NuGet, or Homebrew. However, consider the possibility that whoever is reading your README is a novice and would like more guidance. Listing specific steps helps remove ambiguity and gets people to using your project as quickly as possible. If it only runs in a specific context like a particular programming language version or operating system or has dependencies that have to be installed manually, also add a Requirements subsection.

## Usage

Here are a few examples of how the application can be used:
- Registration

- Login

- Create DM

- Sent text

- Create group

Use examples liberally, and show the expected output if you can. It's helpful to have inline the smallest example of usage that you can demonstrate, while providing links to more sophisticated examples if they are too long to reasonably include in the README.

## Support -REMOVE SECTION?
Tell people where they can go to for help. It can be any combination of an issue tracker, a chat room, an email address, etc.

## Roadmap
If you have ideas for releases in the future, it is a good idea to list them in the README.

## Contributing -REMOVE SECTION?
State if you are open to contributions and what your requirements are for accepting them.

For people who want to make changes to your project, it's helpful to have some documentation on how to get started. Perhaps there is a script that they should run or some environment variables that they need to set. Make these steps explicit. These instructions could also be useful to your future self.

You can also document commands to lint the code or run tests. These steps help to ensure high code quality and reduce the likelihood that the changes inadvertently break something. Having instructions for running tests is especially helpful if it requires external setup, such as starting a Selenium server for testing in a browser.

## Authors and acknowledgment
Main Developers: Inês Santos, Catarina Marques and Cansu Sharef.

A special thanks to Professor Rodrigo Bruno from IST.

## License -REMOVE SECTION?
For open source projects, say how it is licensed.

## Project status -REMOVE SECTION?
If you have run out of energy or time for your project, put a note at the top of the README saying that development has slowed down or stopped completely. Someone may choose to fork your project or volunteer to step in as a maintainer or owner, allowing your project to keep going. You can also make an explicit request for maintainers.
