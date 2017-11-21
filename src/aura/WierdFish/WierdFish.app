<aura:application extends="force:slds" controller="contactController">

    <!-- Attributes -->
    <aura:attribute name="userName" type="String"/>
    <!-- Handlers -->
    <aura:handler name="init" value="{!this}" action="{!c.doInit}"/>

    <c:contactList currentUser="{!v.userName}"/>
    <!-- <c:contactList /> -->


</aura:application>