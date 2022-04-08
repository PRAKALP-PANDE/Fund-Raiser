#include <stdio.h>
#include <stdlib.h>

struct Node
{
    int data;
    struct Node *next;
};

void LinkedListTraverse(struct Node *ptr)
{
    while (ptr != NULL)
    {
        /* code */
        printf("Element of linked list:- %d\n", ptr->data);
        ptr = ptr->next;
    }
}

struct Node *InsertionAtFirst(struct Node *head, int data)
{
    struct Node *ptr = (struct NOde *)malloc(sizeof(struct Node));
    ptr->data = data;
    ptr->next = head;
    return ptr;
};

struct Node *InsertionAtEnd(struct Node *head, int data)
{
    struct Node *ptr = (struct Node *)malloc(sizeof(struct Node));
    ptr->data = data;
    struct Node *p = head;
    while (p->next != NULL)
    {
        /* code */
        p = p->next;
    }
    p->next = ptr;
    ptr->next = NULL;
    return head;
};

int main()
{
   
    struct Node *head;
    struct Node *second;
    struct Node *third;
    struct Node *fourth;
    
    //Memory allocations
    head = (struct Node *)malloc(sizeof(struct Node));
    second = (struct Node *)malloc(sizeof(struct Node));
    third = (struct Node *)malloc(sizeof(struct Node));
    fourth = (struct Node *)malloc(sizeof(struct Node));

    head->data = 10;
    head->next = second;

    second->data = 20;
    second->next = third;

    third->data = 30;
    third->next = fourth;

    fourth->data = 40;
    fourth->next = NULL;

    printf("Linked list before any operation\n");
    LinkedListTraverse(head);
    printf("After inserting 16 at top of Linked LIst \n");
    head = InsertionAtFirst(head, 16);
    LinkedListTraverse(head);
    printf("Linked list after adding 34 at end\n");
    head = InsertionAtEnd(head, 34);
    LinkedListTraverse(head);
    return 0;
}
