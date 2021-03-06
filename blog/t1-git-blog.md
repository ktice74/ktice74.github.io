Git-ing acquanted with git, GitHub and Version Controls

Hopefully I'll win a prize for being the 1,000,000th Internet user to make that pun...

10/10/14
Current Location: Denver, CO

Today (TGIF!) marks the end of a long week of traveling, coding exercises and learning about Version Control Systems, which I'll touch upon in this blog. Much like getting to know a new city, navigating between git and GitHub is a process in misguided turns, scratching your head and enough reps that you know your way around the block instinctively.

Both git and GitHub are examples of version control systems. What is version control software, you ask? I think of two helpful mental pictures to better understand this. When building an application or piece of software, rather than saving the program in the manner that you would save a Microsoft Word document (i.e you are continuously saving the most up to date version of the document, so that there is only one up to date version of the file being saved), version control systems are saved as individual stand-alone versions of the same files. You can think of these as "time stamps" of fully functional versions of the software.

You can think of the application as the trunk of a tree and the different "time-stamped" saved versions of the branches of this tree. They live in parallel and are stand alone files or versions of the software but are not necessarily a part of the final (or in-progress) version of the application.

Along a same vein (I know, so many metaphors being thrown out), you can think of version control systems as checkpoints in a video game. If you lose a battle with a boss (I'm not a gamer so apologies for the dated metaphor), rather than starting from the very beginning of the video game, you restart at your latest checkpoint. Similarly, if you encounter issues or bugs with your software, rather than starting from scratch, you can go to a previously saved and time-stamped version of your application and build from there.

So what does this all mean and how is this helpful for developers? (I know, I'm interviewing myself and asking all the hard hitting questions) It means that multiple developers can work remotely on the same application and not step on each other's toes. Imagine if a remote team was trying to all work on a Google Document at the same time. It would be nearly impossible for them to work simultaneously, because each save would inevitably wipe away or erase each other's progress. Therefore, with the version control system model, developers can work simultaneously on individual components and branches of the application in parallel. This is because rather than doing a master save as they go, the team is instead contributing their changes to the master branch so that the team isn't tripping over each other's toes.

While this explanation is very abstract. I'll try to narrow it down in more concrete terms. The first method that we've learned to implement version control systems is through git. Git is a native software program that you install and run through your terminal/command line. Within your command line (terminal sounds a bit morbid), git is the tool that allows you to save different versions of your application. Within your command line, you are navigating between working directories (another way of saying file paths). Anytime you manipulate a file, git will know that this manipulation is "unsaved." You can "ask" your command line what items within that working directory have not yet been saved by typing in "git status" into the command line. Git will tell you what file(s) has been modified since your last git push (think "save"). When you are finally ready for a push, you have the option to add certain files to the push, which you then commit and finally push to the master branch (think "trunk"). Similarly, you can also make changes and rather than merging to the master branch/trunk, you can create a separate branch which allows for you to have a separate parallel instance of the application which you can then return to at a later time.

While git exists locally on your computer, GitHub is an on-line repository that allows users to access one another's files and code remotely by logging into www.github.com. By posting your files and code to this on-line repository, others can access these files and clone them onto their local machines which allow them to contribute and modify the existing code.

How do git and GitHub relate to one another? (another thing about traveling is that your surrounding friends are few and far between so as my talking to myself emphasizes, you're your own best friend out there...) You are able to push your local changes through git remotely directly to the GitHub server.

That's about it! Thanks for reading and hope that you learned something!

A final note about the similarities between traveling and my introduction to software development (and future blogposts), I'm reminded of one of my favorite quotes about traveling and getting to know one's self:

"Our battered suitcases were piled on the sidewalk again; we had longer ways to go. But no matter, the road is life.” – Jack Kerouac"

When traveling, we are completely ourselves, stripped of our familiar surroundings, acquaintances and belongings. Similarly, when learning a new craft, we are stripped of these very same things. It's during these times that we ultimately learn the most about ourselves because we are the closest to our "true selves." It's never the easiest way to go through life but it certainly is the most meaningful.