export declare module getGroupsNamespace {
  interface Member {
    user_id: string;
    nickname: string;
    image_url: string;
    id: string;
    muted: boolean;
    autokicked: boolean;
    roles: string[];
    name: string;
  }

  interface Preview {
    nickname: string;
    text: string;
    image_url: string;
    attachments: any[];
  }

  interface Messages {
    count: number;
    last_message_id: string;
    last_message_created_at: number;
    preview: Preview;
  }

  interface Group {
    id: string;
    group_id: string;
    name: string;
    phone_number: string;
    type: string;
    description: string;
    image_url: string;
    creator_user_id: string;
    created_at: number;
    updated_at: number;
    muted_until?: any;
    office_mode: boolean;
    share_url: string;
    share_qr_code_url: string;
    members?: Member[];
    messages: Messages;
    max_members: number;
    theme_name: string;
    like_icon?: any;
  }

  interface Meta {
    code: number;
  }

  interface ResponseWrapper {
    response: Group[];
    meta: Meta;
  }
}

export const getGroups = ({
  accessToken,
  page = 1,
  perPage = 10,
  omitMembership = true,
}: {
  accessToken: string;
  page?: number;
  perPage?: number;
  omitMembership?: boolean;
}): Promise<getGroupsNamespace.ResponseWrapper> =>
  fetch(
    `https://www.dishbot.net/group-me/v3/groups?${new URLSearchParams([
      ["token", accessToken],
      ["page", page.toFixed(0)],
      ["per_page", perPage.toFixed(0)],
      ["omit", omitMembership ? "memberships" : ""],
    ])}`,
    { headers: { "content-type": "application/json" } }
  )
    .then((response) => response.json())
    .then((data: getGroupsNamespace.ResponseWrapper) => data);
