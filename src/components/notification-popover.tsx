import { Bell } from "lucide-react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export default function NotificationPopover() {
  const notifications = [
    {
      id: 1,
      title: "Meditation Reminder",
      message: "Time for your daily 10-minute meditation session",
      time: "5 minutes ago",
      read: false,
    },
    {
      id: 2,
      title: "Workout Complete",
      message: "Great job finishing your morning workout!",
      time: "2 hours ago",
      read: true,
    },
    {
      id: 3,
      title: "Analytics Update",
      message: "Your weekly wellness report is ready",
      time: "1 day ago",
      read: false,
    },
    {
      id: 4,
      title: "New Feature",
      message: "Check out our new guided breathing exercises",
      time: "3 days ago",
      read: true,
    },
  ];

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative rounded-full cursor-pointer"
        >
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0">
        <div className="p-4 border-b">
          <h3 className="font-semibold text-lg">Notifications</h3>
          <p className="text-sm text-muted-foreground">
            You have {unreadCount} unread notifications
          </p>
        </div>
        <div className="max-h-96 overflow-y-auto">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 border-b last:border-b-0 hover:bg-muted/50 cursor-pointer ${
                !notification.read ? "bg-blue-50/50" : ""
              }`}
            >
              <div className="flex justify-between items-start gap-2">
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{notification.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {notification.message}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    {notification.time}
                  </p>
                </div>
                {!notification.read && (
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-1"></div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t">
          <Button variant="ghost" className="w-full text-sm">
            Mark all as read
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
