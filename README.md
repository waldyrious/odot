Odot
====

Odot is a simple but powerful task manager, meant to address
[the problems](http://blogs.hbr.org/2012/01/to-do-lists-dont-work/)
of [simple to-do lists](https://zapier.com/blog/to-do-list-broken/).
To this, it aims to incorporate:
- a hierarchical tree of tasks, to allow task subdivision.
  This provides better task organization
  and addresses the need to split "iceberg" tasks into manageable units.
  See for example [Checkvist](http://checkvist.com)
  and [Workflowy](http://workflowy.com).
- an auto-updating model for items without a well-defined deadline,
  like [TeuxDeux](http://teuxdeux.com/).
- a multi-component, [objective priority scale](http://waldir.github.io/odot/priority.xhtml)
  (work in progress) to better inform execution order.
  This includes setting due dates with various levels of precision,
  and allows settin complex repeating patterns.
- a visual planner (agenda), where tasks are automatically filled
  given their estimated duration and the time available
  (but can be manually readjusted). They also rearrange automatically
  if tasks aren't marked as completed.
- ability to tag and filter tasks in real-time with a powerful search engine
  (think gmail, github, duckduckgo). This is just for extra convenience.
  But some tags could even be configured to automatically fill
  some of the priority components (e.g. `#work` --> `commitment:paid work`).
  Perhaps also a context (`@home`, etc.) for location-based task selection.
- A simple text-based interface (see [todo.txt](http://todotxt.com))
  for current tasks. SQLite for archived (completed / deleted) tasks,
  so it works perfectly offline.
  Perhaps a [node-webkit](https://github.com/rogerwang/node-webkit) app.
- With cloud storage integration so it syncs across devices for free,
  see [TextDrop](https://www.textdropapp.com) for example.

## Implementation notes
Initial plans were to make this a client-side browser-based app,
consisting of a simple html file and a text file serving as the "database",
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

# Alternatives
Odot is still mostly in the planning phase, with very little actually implemented.
Feel free to contribute ideas, fixes, improvements, and (constructive) criticism.
Check Odot's [roadmap](https://github.com/waldir/odot/issues/milestones)
for an outline of upcoming development and planned features.
See also the [waffle.io board](https://waffle.io/waldir/odot).

Meanwhile, there are plenty of good apps out there that follow some of the principles
outlined for Odot. [Checkvist](http://checkvist.com), [HollyApp](https://hollyapp.com)
and [Workflowy](http://workflowy.com) are highly recommended.
