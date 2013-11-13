[![Stories in Ready](https://badge.waffle.io/waldir/odot.png?label=ready)](https://waffle.io/waldir/odot)  
Odot
====

A simple but powerful task manager.

Initial plans were to make this a client-side browser-based app,
consisting of a simple html file and a text file serving as the "database"
(see [todo.txt](http://todotxt.com) for the reasoning),
which would be located in a synchronized folder, such as Dropbox or Google Drive.

This would have made things easier both in the development side
(because it would outsource user account management and file versioning),
and in the user side (because it would eliminate the hassle of creating
Yet Another Account as well as any security concerns associated with that).

Alas, this is not yet possible (in the browser) with client-side code only,
so Odot is being built as a server-side app instead.
This means that, while there's a demo in the works that can be played with,
it won't load or save data; you will have to host it in a server
if you want your data saved persistently.

But don't worry, you're not missing much, since it's in early states
and there are plenty of good apps out there that do much more than Odot does now.
[Checkvist](http://checkvist.com) and [Workflowy](http://workflowy.com) are highly recommended.
Meanwhile, check Odot's [roadmap](https://github.com/waldir/odot/issues/milestones)
for an outline of upcoming development and planned features.
