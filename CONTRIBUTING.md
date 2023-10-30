# Contribution Guidelines

**Many Passwords** is powered by the community, so we welcome and encourage contributions in various ways. Your help is invaluable in making this project better and more useful.

## How You Can Help

You can contribute in the following ways:

1. **Add New Default Passwords:** Submit pull requests with new default passwords. Please follow the guidelines that have been included below for formatting.

2. **Update Snippets:** Submit pull requests for snippet updates. This includes fixing notes, correcting typos, or rectifying incorrect data.

3. **Improve the Project Website:** Submit pull requests with improvements, corrections, or any other enhancements related to the project's website. The website files are located in the website repository.

4. **Share Your Ideas:** Submit pull requests or open issues with your creative ideas to enhance the project. We value your suggestions and creativity.

5. **Suggest Additions or Modifications:** Open issues to propose features you'd like to see added or existing ones modified. For example, if you notice a typo but aren't sure how to fix it, please create an issue.

6. **Resolve Unresolved Issues:** Contribute by resolving existing open issues from [here](https://github.com/many-passwords/many-passwords.github.io/labels/help%20wanted) and [here](https://github.com/many-passwords/many-passwords.github.io/labels/help%20wanted).

7. **Any Other Contributions:** If you have unique ways to help the project that isn't covered above, feel free to share your ideas and we'll explore them together.

## Ground Rules

To maintain consistency and ensure proper integration, please adhere to these ground rules:

1. **CSV Format:** Credentials are stored as a CSV file. You can find the CSV file in this repository. Please follow this format for adding or modifying records: Vendor,Model,Version,Access Type, Username, Password, Privileges,Notes

Example:
```3COM,Wireless AP,ANY,Multi,admin,comcomcom,Admin,Works on all 3com wireless APs```
![Example display](https://cdn.discordapp.com/attachments/574604364342231052/765893402176126976/unknown.png)

2. **Creating New Entries:** If you want to add new records, please start by creating an issue to discuss the addition. This ensures that we maintain data quality and accuracy.

3. **GitHub Action:** We use GitHub Actions to sort the records alphabetically and update the number of passwords in the README file. You don't have to do this manually.

4. **Blank Fields:** If a field in a record is intentionally blank (e.g., no password or username), use `<blank>` to indicate this. If not, please leave the field empty.

5. **No Need to Worry:** If you're uncertain about any step or think something went wrong, don't worry. We are here to help you. Please feel free to open a pull request or issue, and we'll be able to help you.

## How to Contribute: Fork, Clone, Create Branch, and Push

Here are the steps to contribute to this project:

1. **Fork the Repository:** Click the "Fork" button at the top right of this repository. This creates a copy of the project in your GitHub account.

2. **Clone Your Fork:** Use `git` to clone your fork to your local machine:
```bash
git clone https://github.com/your-username/repository-name.git
```
3. **Create a Branch**: Create a new branch for your contribution. Name it descriptively, so others can understand the purpose of your branch:
```bash
   git checkout -b descriptive-branch-name
```
4. **Make Your Changes**: Make the necessary changes or additions to the project files.

5. **Commit Your Changes**: After making changes, commit them to your branch:
```bash
git add .
git commit -m "Descriptive commit message"
```
6. **Push Your Changes**: Push your branch to your GitHub repository:
```bash
git push origin descriptive-branch-name
```
7. **Create a Pull Request**: Go to the original project repository on GitHub. You will see a "Compare & pull request" button. Click on it to open a new pull request.

8. **Wait for Review**: Your contribution will be reviewed, and any necessary changes will be discussed.

By following these steps, you can contribute to the project and help make it better for everyone. Thank you for your contributions!
