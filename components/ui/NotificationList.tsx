"use client";

import React from "react";
import Card, { CardHeader, CardTitle, CardDescription, CardAction } from "./Card";
import Button from "./Button";

export interface NotificationItemData {
  id: string | number;
  title: string;
  description: string;
  time: string;
  unread?: boolean;
  category?: "info" | "warning" | "success" | "danger";
}

export interface NotificationListProps {
  notifications: NotificationItemData[];
  title?: string;
  description?: string;
  onMarkAllRead?: () => void;
  className?: string;
}

export function NotificationList({
  notifications,
  title = "Semua Notifikasi",
  description = "Pemberitahuan aktivitas dan peringatan sistem",
  onMarkAllRead,
  className = "",
}: NotificationListProps) {
  const getCategoryStyles = (category?: string) => {
    switch (category) {
      case "warning":
        return {
          bg: "bg-[#FFF1D1] text-[#8A5A00]",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" x2="12" y1="8" y2="12" />
              <line x1="12" x2="12.01" y1="16" y2="16" />
            </svg>
          ),
        };
      case "danger":
        return {
          bg: "bg-[#FBE8E8] text-[#B02A2A]",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" x2="12" y1="8" y2="12" />
              <line x1="12" x2="12.01" y1="16" y2="16" />
            </svg>
          ),
        };
      case "success":
        return {
          bg: "bg-[#DFF5F4] text-[#0B7A77]",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          ),
        };
      default:
        return {
          bg: "bg-[#E3F0FA] text-[#0066B3]",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" x2="12" y1="16" y2="12" />
              <line x1="12" x2="12.01" y1="8" y2="8" />
            </svg>
          ),
        };
    }
  };

  return (
    <Card className={className}>
      <CardHeader className="pb-4 border-b border-[#E8EEF3] mb-4">
        <div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>

        {onMarkAllRead && (
          <CardAction>
            <Button
              variant="ghost"
              size="sm"
              onClick={onMarkAllRead}
              className="text-[#0066B3] hover:underline"
            >
              Tandai semua dibaca
            </Button>
          </CardAction>
        )}
      </CardHeader>

      <div className="divide-y divide-[#E8EEF3]">
        {notifications.length === 0 ? (
          <div className="py-8 text-center text-[#64748B] text-[13px]">
            Tidak ada notifikasi baru.
          </div>
        ) : (
          notifications.map((item) => {
            const { bg, icon } = getCategoryStyles(item.category);
            return (
              <div
                key={item.id}
                className={`py-4 px-3 flex items-start justify-between gap-4 rounded-[10px] transition-colors ${
                  item.unread ? "bg-[#F1F7FB]/40" : "hover:bg-slate-50"
                }`}
              >
                <div className="flex items-start gap-3.5">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${bg}`}
                  >
                    {icon}
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[13.5px] font-semibold text-[#1E293B]">
                      {item.title}
                    </span>
                    <span className="text-[12.5px] text-[#64748B] mt-0.5">
                      {item.description}
                    </span>
                    <span className="text-[11px] text-[#A9BEDA] mt-1">
                      {item.time}
                    </span>
                  </div>
                </div>

                {item.unread && (
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F5A000] shrink-0 mt-2" />
                )}
              </div>
            );
          })
        )}
      </div>
    </Card>
  );
}

export default NotificationList;

